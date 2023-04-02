// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import NewsApiService from './news-service';
// import LoadMoreBtn from './load-mode-btn';
// import articleTemplate from '../templates/articles.hbs';

// /**сделали екзепляр класа  LoadMoreBtn для анимирования кнопки Показать больше
//  и отображения процесса загрузки данных*/
// const loadMoreBtn = new LoadMoreBtn({
//   /**в конструкторе класа деструктуризированны свойства объекта, поэтому при создании екземпляра можем сразу перезаписать заначния */

//   /**добавляем selector по которому будем искать кнопку */
//   selector: '[data-action="load-more"]',
//   /**сразу срываем кнопку */
//   hidden: true,
// });

// // сделали екземпляр класса NewsApiService
// // что бы получить доступ к свойствам и методам
// const newsApiService = new NewsApiService();
// console.log('newsApiService:', newsApiService);

// const searchForm = document.querySelector('.js-search-form');
// const searchBtn = document.querySelector('.mb-2');
// // const getMoreBtn = document.querySelector('[data-action="load-more"]');
// const articlesContainer = document.querySelector('.js-articles-container');

// searchForm.addEventListener('submit', onSearchForm);

// /**повешали слушатель на кнопку через екземпляр класа */
// loadMoreBtn.refs.button.addEventListener('click', onMoreBtnClick);

// function onSearchForm(e) {
//   e.preventDefault();

//   // перезаписали значаение this.searchQuery на то что будет введено в инпуте
//   newsApiService.query = e.currentTarget.elements.query.value;

//   if (newsApiService.query === '') {
//     Notify.warning('Вы ввели пустой запрос, проверьте правильность ввода');
//   }

//   /**при сабмите формы показываем кнопку,
//      но делаем ее недоступной для нажатия и анимируем процес загрузки */
//   loadMoreBtn.show();
//   loadMoreBtn.disable();

//   /* когда сабмитим форму нужно сбросить занчение page снова до 1
//   что бы подгрузить новую коллекцию начиная с первой страницы */
//   newsApiService.resetPage();

//   //   вызвали метод класа который запускает fetch
//   /**Сюда вернули промис при успешном выполнении которого нам возвращается  data.artucles
//    * получаем занчение дописывая then что бы получить масив artucles
//    */
//   newsApiService.fetchArticles().then(article => {
//     /** очистки страницы при сабмите формы для того что
//         бы когда пользователь ввел новый запрос все предидущие статьи ушли
//         и перерерисовались новые*/
//     clearArticlesContainer();

//     /**Перерисовка новый статей (плавная),
//      то есть пока статьи по новому запросу не загрузились старые остаються */
//     appendArticlesMarkup(article);

//     /**когда новые данные уже загрузились снова делаем кнопку активной для нажатия, убираем спинер прокрутки */
//     loadMoreBtn.enable();
//   });
// }

// function onMoreBtnClick() {
//   /**когда мы уже нажали на кнопку делаем ее неактивной,
//    * для предупреждения совершения пользователем слишком
//    * частых нажатий и анимирования процесса загрузки */
//   loadMoreBtn.disable();

//   // вызвали метод класа который запускает fetch
//   newsApiService.fetchArticles().then(article => {
//     appendArticlesMarkup(article);
//     loadMoreBtn.enable();
//   });
// }

// function appendArticlesMarkup(articles) {
//   articlesContainer.insertAdjacentHTML('beforeend', articleTemplate(articles));
// }

// // функция для очистки страницы при сабмите формы
// function clearArticlesContainer() {
//   articlesContainer.innerHTML = '';
// }
// ===========================================================================
// https://newsapi.org/

import NewsApiService from './news-service';
import articleTemplate from '../templates/articles.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadMoreBtn from './load-mode-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  // loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  // earchBtn: document.querySelector('.mb-2'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);
loadMoreBtn.refs.button.addEventListener('click', smartFetchArticles);

function onSearch(event) {
  event.preventDefault();
  newsApiService.query = event.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    Notify.warning('Вы ввели пустой запрос, проверьте правильность ввода');
  }

  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticlesContainer();
  smartFetchArticles();
}

// function onLoadMoreBtn() {
//   smartFetchArticles();
// }

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    articleTemplate(articles),
  );
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}

function smartFetchArticles() {
  loadMoreBtn.disable();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}
