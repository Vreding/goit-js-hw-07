import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
            />
          </a>
        </div>`
    )
    .join('');
}

galleryDiv.innerHTML = createGalleryMarkup(galleryItems);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  galleryDiv.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}

galleryDiv.addEventListener('click', onImageClick);
