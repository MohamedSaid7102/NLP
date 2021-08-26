import './styles/general.scss';
import './styles/main.scss';
import { handleUserSubmit } from './js/formHandler';

const Form = document.getElementById('form');
Form.addEventListener('submit', (e) => {
  e.preventDefault();
  return handleUserSubmit(document.getElementById('article-url').value);
});
