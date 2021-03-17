import { List, Avatar } from 'antd';
import './style.css';

const SearchList = ({ data, query, onSelect, ...props }) => {
  const spliter = new RegExp(query, 'i');
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      {...props}
      renderItem={item => {

        return (
          <List.Item onClick={() => onSelect(item.title)}>
            <List.Item.Meta
              avatar={<Avatar src={item.image_url} />}
              title={(
                <a href={item.url}>
                  {item.title.split(spliter)[0]}
                  <b className="highlight">{item.title.match(spliter)}</b>
                  {item.title.split(spliter)[1]}
                </a>
              )}
            />
          </List.Item>
        )}
      }
    />
  )
}

export default SearchList;
