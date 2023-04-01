const BASE_URL = 'http://localhost:3000';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(response => response.json());
}

addBook({
  title: 'Test',
  author: 'Alex',
  genres: ['JS'],
  rating: 9,
}).catch(e => console.log(e));

addBook({
  title: 'Test2',
  author: 'Tim',
  genres: ['CSS'],
  rating: 6,
}).catch(e => console.log(e));
