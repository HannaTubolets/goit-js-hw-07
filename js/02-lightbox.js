import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
const galleryItemsEl = [];

galleryItems.forEach(element => {

  const galleryLink = document.createElement('a');
  galleryLink.className = 'gallery__link';
  galleryLink.href = element.original;

  const galleryImg = document.createElement('img');
  galleryImg.className = 'gallery__image';
  galleryImg.src = element.preview;
  galleryImg.setAttribute('title', element.description);
  galleryImg.alt = element.description;

  galleryLink.append(galleryImg);
  galleryItemsEl.push(galleryLink);
});

galleryListEl.append(...galleryItemsEl);

new SimpleLightbox('.gallery a', {
    captionDelay: 250
});