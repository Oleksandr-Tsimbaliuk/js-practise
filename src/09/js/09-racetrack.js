import '../css/common.css';
import '../css/promises-common.css';

// 1var---------------------------------------
const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(horse => {
    return run(horse);
  });
  updateWinnerField('');
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');
  detarmineWinner(promises);
  waitForAll(promises);
}
function waitForAll(horsesPromises) {
  Promise.all(horsesPromises).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки.');
  });
}
function detarmineWinner(horsesPromises) {
  Promise.race(horsesPromises).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени!`);
    updateResultsTable({ horse, time, raceCounter });
  });
}
function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}
function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

// 2var---------------------------------------
// const horses = [
//   "Secretariat",
//   "Eclipse",
//   "West Australian",
//   "Flying Fox",
//   "Seabiscuit",
// ];

// let raceCounter = 0;
// const refs = {
//   startBtn: document.querySelector(".js-start-race"),
//   winnerField: document.querySelector(".js-winner"),
//   progressField: document.querySelector(".js-progress"),
//   tableBody: document.querySelector(".js-results-table > tbody"),
// };

// refs.startBtn.addEventListener("click", () => {
//   const promises = horses.map((horse) => {
//     return run(horse);
//   });
//   updateWinnerField("");
//   updateProgressField("🤖 Заезд начался, ставки не принимаются!");

//   Promise.race(promises).then(({ horse, time }) => {
//     updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени!`);
//     updateResultsTable({ horse, time });
//   });

//   Promise.all(promises).then(() => {
//     updateProgressField("📝 Заезд окончен, принимаются ставки.");
//   });
// });

// function detarmineWinner(params) {}

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }
// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }
// function updateResultsTable({ horse, time, raceCounter }) {
//   const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
//   refs.tableBody.insertAdjacentHTML("beforeend", tr);
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }
