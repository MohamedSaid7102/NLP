const regeneratorRuntime = require('regenerator-runtime'); //to avoid console error
import { isUrlValid } from './isUrlValid';
import axios from 'axios';

async function handleUserSubmit(url) {
  if (!isUrlValid(url)) return alert('please, check the url and try again');
  await axios
    .post('http://localhost:8083/add-url', { url })
    .then((res) => {
      if (res.data.data && res.data.data.length != 0) {
        document.getElementById('result').innerHTML = res.data.data;
        document.getElementById('article-url').value = '';
      }
    })
    .catch((error) => {
      alert('looks like the article is empty !', error);
    });
}

export { handleUserSubmit };
