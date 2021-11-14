import ImageApiService from './js/apiService';

const refs = {
    searchForm: document.querySelector('#search-form'),
    loadMoreBth: document.querySelector('[data-action="load-more"]')
};

const imageApiSearch = new ImageApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBth.addEventListener('click', onLoadMore);

function onSearch(e){
  e.preventDefault();

  imageApiSearch.searchQuery = e.currentTarget.elements.query.value;
  
  imageApiSearch.fetchImage();
};

function onLoadMore (){
  imageApiSearch.fetchImage();
};