// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const markupGallery = createMarkupGallery(galleryItems);
galleryEl.innerHTML = markupGallery;

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function createMarkupGallery(arr) {
  return arr
    .map(
      item => `<li class="gallery__item">
				<a class="gallery__link" href="${item.original}">
					<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
				</a>
			</li>`
    )
    .join('');
}
