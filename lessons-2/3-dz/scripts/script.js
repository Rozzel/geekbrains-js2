let photoPreviews = document.getElementById('gallery__photo-previews');
let fullPhoto = document.getElementById('gallery__photo-full');
  
  fetch('gallery/gallery.json')
      .then(result => result.json())
      .then(data => {
        
        fullPhoto.innerHTML += `<img class="full-photo" src="${data[0].srcl}" alt="${data[0].alt}">`;

        for (let i = 0; i < data.length; i++) {
            photoPreviews.innerHTML += `<button class="gallery__photo-preview" type="button"><img src="${data[i].srcs}" alt="${data[i].alt}"></button>`;
        }
      })
      .catch(error => console.log(error));