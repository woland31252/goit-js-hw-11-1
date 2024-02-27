import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import ImageApiService from './JS/pixabay-api.js';
import createMarkup from './JS/render-functions.js';



const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');


form.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  let inputValue = '';
  const form = event.target;
  console.log(form)
  inputValue = form.elements.searchQuery.value.trim();
  if (inputValue === '') {
    iziToast.info({
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#FFFFFF',
      maxWidth: '432px',
      backgroundColor: 'red',
      position: 'topRight',
      titleSize: '24px',
      message: 'Please formulate a request',
    });
    return;
  }
  ImageApiService(inputValue)
    .then(elem => fetchHits(elem))
    .catch(err => onError(err))
    .finally(() => form.reset());
  clearList();
}

function fetchHits(elem) {

    const hits = elem.hits;
  if (hits.length === 0) {
      iziToast.info({
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#FFFFFF',
        maxWidth: '432px',
        backgroundColor: 'red',
        position: 'topRight',
        titleSize: '24px',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return
    } else {
        const markup = hits.reduce(
        (markup, hit) => createMarkup(hit) + markup,
        ''
      );
      appendToList(markup);
    }
}

function appendToList(markup) {
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

function clearList() {
  gallery.innerHTML = '';
}

function onError(err) {
  console.error(err);
}

const lightbox = new SimpleLightbox('.gallery a');