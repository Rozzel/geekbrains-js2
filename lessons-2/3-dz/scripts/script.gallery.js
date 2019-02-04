let photoPreviews = document.getElementById('gallery__photo-previews');
let fullImg = document.getElementById('gallery__photo-full');
  
  fetch('gallery/gallery.json')
      .then(result => result.json())
      .then(data => {
        
        fullImg.innerHTML = `<img class="full-photo" src="${data[0].srcl}" alt="${data[0].alt}">`;

        for (let i = 0; i < data.length; i++) {
            photoPreviews.innerHTML += `<button class="gallery__photo-preview" type="button"><img src="${data[i].srcs}" alt="${data[i].alt}"></button>`;
        }

        let thumbnails = document.querySelectorAll('.gallery__photo-preview');
        let fullPhoto = document.querySelector('.full-photo');
        
        let addThumbnailClickHandler = function (thumbnail, src, alt) {
          thumbnail.addEventListener('click', function () {
            fullPhoto.src = src;
            fullPhoto.alt = alt;
          });
        };
        
        for (let i = 0; i < thumbnails.length; i++) {
          addThumbnailClickHandler(thumbnails[i], data[i].srcl, data[i].alt);
        }


      })
      .catch(error => console.log(error));



      