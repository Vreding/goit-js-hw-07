import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<li>
          <a class="gallery__item" href="${item.original}">
            <img 
              class="gallery__image" 
              src="${item.preview}" 
              alt="${item.description}" />
          </a>
        </li>`
    )
    .join('');
}

galleryUl.innerHTML = createGalleryMarkup(galleryItems);

let lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
