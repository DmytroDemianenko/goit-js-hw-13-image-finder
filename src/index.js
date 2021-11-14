import ImageApiService from './js/apiService';
import imageTmpl from './templates/markupImageCard';

const refs = {
    searchForm: document.querySelector('#search-form'),
    loadMoreBth: document.querySelector('[data-action="load-more"]'),
    imageUl: document.querySelector('.gallery'),
};

const imageApiSearch = new ImageApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBth.addEventListener('click', onLoadMore);

function onSearch(e){
  e.preventDefault();
  clearHitsContainer();
  imageApiSearch.searchQuery = e.currentTarget.elements.query.value;
  imageApiSearch.resetPage();
  imageApiSearch.fetchImage().then(appendHitsMarkup);
};

function onLoadMore (){
  imageApiSearch.fetchImage().then(appendHitsMarkup);
};

function appendHitsMarkup(hits) {
  refs.imageUl.insertAdjacentHTML('beforeend', imageTmpl(hits));
};
function clearHitsContainer(){
  refs.imageUl.innerHTML = '';
}