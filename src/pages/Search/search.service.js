import request from '../../api';

class SearchService {
  #cash = {};

  async get(query) {
    if (this.#cash[query]) {
      return this.#cash[query];
    }

    const { data } = await request.get(`/search/anime?limit=8&q=${query}`);

    this.#cash[query] = data.results;
    return data.results;
  }
}

export default new SearchService();
