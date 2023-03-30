const containerEl = document.querySelector('.container');

export default function renderPhotos(photos) {
  photos.map(photo => {
    const { earth_date, img_src, id, rover, camera } = photo;
    card = `
  <li>
    <a href="${img_src}" class="photo-link"><img src="${img_src}" alt="Photo - ${id}" width = 320></a>
    <h3>Rover: ${rover.name}</h3>
    <p>Photo data: ${earth_date}</p>
    <p>Camera name: ${camera.name}</p>
  </li>
`;
    return containerEl.insertAdjacentHTML('beforeend', card);
  });
}

// const containerEl = document.querySelector('.container');
// export default function (photo) {
//   const rend = `<div class="gallery">
//     <div class="gallery-item">
//         <img src="${photo.img_src}" alt="${photo.id}" />
//         <div class="image-overlay">
//             <p>${photo.earth_date}</p>
//         </div>
//     </div>
//     <div class="gallery-item">
//         <img src="${photo.img_src}" alt="${photo.id}" />
//         <div class="image-overlay">
//             <p>${photo.earth_date}</p>
//         </div>
//     </div>
//     <div class="gallery-item">
//         <img src="${photo.img_src}" alt="${photo.id}" />
//         <div class="image-overlay">
//             <p>${photo.earth_date}</p>
//         </div>
//     </div>
//     <div class="gallery-item">
//         <img src="${photo.img_src}" alt="${photo.id}" />
//         <div class="image-overlay">
//             <p>${photo.earth_date}</p>
//         </div>
//     </div>
//     <div class="gallery-item">
//         <img src="${photo.img_src}" alt="${photo.id}" />
//         <div class="image-overlay">
//             <p>${photo.earth_date}</p>
//         </div>
//     </div>
//     <div class="gallery-item">
//         <img src="${photo.img_src}" alt="${photo.id}" />
//         <div class="image-overlay">
//             <p>${photo.earth_date}</p>`;

//   return containerEl.insertAdjacentHTML('beforeend', rend);
// }
