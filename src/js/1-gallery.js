import SimpleLightbox from 'simplelightbox';
import { images } from './gallery-items';
const container = document.querySelector('.gallery');
container.insertAdjacentHTML('beforeend', createGallery(images));

function createGallery(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<li>
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
