export default class ImageApiSearch {
    constructor(){
        this.searchQuery = ' ';
        this.page = 1;
    }
    fetchImage(){
      console.log(this);
        const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=24297910-266d35e9d32fe9ab4dcc44a53`;
  
        return fetch(URL)  
        .then(response => 
          response.json())
        .then(({hits}) => {
          this.page += 1;
          return hits;
          }
            );
    }
    resetPage(){
      this.page = 1;
    }
    get query() {
        return this.searchQuery;
      }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
      }
}