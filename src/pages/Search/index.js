import React, { useState, useEffect, useCallback } from 'react';
import { useDebounce } from '@react-hook/debounce'
import { InputSearch, SearchList, Logo } from '../../components';
import searchService from './search.service';
import './style.css'

const Search = () => {
  const [inputVal, setinputVal] = useState('');
  const [query, setQuery] = useDebounce('', 300);
  const [list, setList] = useState(null);

  const onChange = useCallback(({ target: { value } }) => {
    setinputVal(value);
    if (value.length < 3) {
      setList(null);
      return;
    }

    setQuery(value)
  }, [setinputVal, setQuery, setList]);

  useEffect(() => {
    if (!query) {
      return;
    }

    searchService.get(query).then(setList);
  }, [query]);

  return (
    <div className="page page__search">
      <Logo />
      <InputSearch value={inputVal} onChange={onChange} className="input-search" />
      {list && <SearchList data={list} query={query} onSelect={setinputVal} className="result-search" />}
    </div>
  );
}

export default Search;
