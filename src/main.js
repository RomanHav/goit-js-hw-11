import { fetchInfo } from './js/pixabay-api';
// import { button, } from './js/render-functions';

const input = document.querySelector('.search');
const button = document.querySelector('.button');

function request() {
  const inputValue = input.value.trim();
  return inputValue;
}

function renderImages() {
  const searchWord = request();
  fetchInfo(searchWord)
    .then(data => {
      // Обрабатываем результаты запроса и отображаем изображения на странице
      console.log('Результаты запроса:', data);
      // Здесь вы можете добавить код для отображения изображений на странице
    })
    .catch(error => {
      console.error('Ошибка при выполнении запроса:', error);
    });
}

input.addEventListener('input', request);
button.addEventListener('click', renderImages);
