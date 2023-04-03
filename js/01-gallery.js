import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener('click', onClick);
function onClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
       return;
    }

    const imgSource = evt.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${imgSource}"/>`,
    );

    instance.show();


   gallery.addEventListener("keydown", onKeydown);

    function onKeydown(evt) {
          if (evt.code === "Escape") {
              instance.close();
           gallery.removeEventListener("keydown", onKeydown);   
          }
    };
       
    }

   
    
     