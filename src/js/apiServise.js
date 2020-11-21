const API_KEY = 'key=19126549-85d1f2f8405aa0462827313fa';
const BASE_URL = 'https://pixabay.com/api/?';

export default class SearchImages { 
  constructor() { 
    this.search = 'cat';
    this.page = 1;
    this.pre_page = 12;
  }

   async fecthContent() { 
     const url = `${BASE_URL}${API_KEY}&q=${this.search}&orientation=horizontal&page=${this.page}&per_page=${this.pre_page}`;
     this.incrementPage();
     return (await (await fetch(url)).json()).hits;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.search;
  }

  set query(newQuery) {
    this.search = newQuery;
  }
}



     