import ImageApiService from './js/apiService';
import imageTmpl from './templates/markupImageCard';
import LoadMoreBtn from './js/load-more-bth';

const refs = {
    searchForm: document.querySelector('#search-form'),
    loadMoreBth: document.querySelector('[data-action="load-more"]'),
    imageUl: document.querySelector('.gallery'),
};

const loadMoreBth = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const imageApiSearch = new ImageApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBth.refs.button.addEventListener('click', fetchImageCard);
console.log(loadMoreBth.refs.button);

function onSearch(e){
  e.preventDefault();
  
  imageApiSearch.query = e.currentTarget.elements.query.value;

  if(imageApiSearch.query === ' '){
    return alert('ВВедите что-то');
  };
  loadMoreBth.show();
  clearHitsContainer();
  imageApiSearch.resetPage();
  fetchImageCard ();
  
};

function fetchImageCard (){
  loadMoreBth.disable();
  imageApiSearch.fetchImage().then(hits =>{
  appendHitsMarkup(hits);
  loadMoreBth.enable();
  });
};

function appendHitsMarkup(hits) {
  refs.imageUl.insertAdjacentHTML('beforeend', imageTmpl(hits));
};
function clearHitsContainer(){
  refs.imageUl.innerHTML = ' ';
};
const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});

function scrollPage() {
  const refGalleryItem = document.querySelectorAll('.gallery__item');

  if (refGalleryItem.length > apiServise.pPage) {
    refGalleryItem[refGalleryItem.length - apiServise.pPage].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};