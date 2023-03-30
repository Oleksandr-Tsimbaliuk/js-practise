export default function searchPhotos(pageNumber) {
  const BASA_URL = 'https://api.nasa.gov/';
  const PATH = 'mars-photos/api/v1/rovers/curiosity/photos';
  const API_KEY = '0RTDSihAMnFR2FmIGkK5m9d4LCQByQKMTtKfzxkr';
  const OPTIONS = `sol=60&page=${pageNumber}`;

  return fetch(`${BASA_URL}${PATH}?${OPTIONS}&api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY

// const BASE_URL = 'https://api.nasa.gov/';
// const API_KEY = '0RTDSihAMnFR2FmIGkK5m9d4LCQByQKMTtKfzxkr';
// const PATH = 'mars-photos/api/v1/rovers/curiosity/photos';

// export default class FetchNasaApi {
//   constructor() {
//     this.page = 1;
//   }

//   fetchApi() {
//     console.log(this);
//     return fetch(
//       `${BASE_URL}${PATH}?sol=50&page=${this.page}&api_key=${API_KEY}`,
//     ).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       this.increasePage();
//       return response.json();
//     });
//   }
//   increasePage() {
//     this.page += 1;
//   }
// }
