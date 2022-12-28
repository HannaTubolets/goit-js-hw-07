import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const galleryItemsEl = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';

  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;

  const galleryImg = document.createElement('img');
  galleryImg.className = 'gallery__image';
  galleryImg.src = element.preview;
  galleryImg.setAttribute('data-source', element.original);
  galleryImg.alt = element.description;

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);

  galleryItemsEl.push(galleryItem);
});

galleryListEl.append(...galleryItemsEl);

galleryListEl.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImg = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
    <img src="${selectedImg}" width="800" height="600">
`);

  instance.show();

  galleryListEl.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
});

