export default class ImageApiSearch {
    constructor(){
        this.searchQuery = ' ';
    }
    fetchImage(){
        const URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=1&per_page=12&key=24297910-266d35e9d32fe9ab4dcc44a53`;
  
        fetch(URL)  
        .then(response => 
          response.json())
        .then(
            data => data);
    }
    get query() {
        return this.searchQuery;
      }
    
    set query(newQuery) {
        this.searchQuery = newQuery;
      }
}