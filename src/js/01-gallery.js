// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery')

export function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
 <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
 `
    }).join('');
}

const galleryMarkup = createGalleryItem(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

galleryList.addEventListener('click', onGaleryItemsClick);


function onGaleryItemsClick(e) {
    e.preventDefault()
}

const gallery = new SimpleLightbox('.gallery__item > .gallery__link', {
    captions: true,
    captionsData: 'alt',
    fadeSpeed: 250,
});
console.log(galleryItems);
