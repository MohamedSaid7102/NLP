// TODO: Edit this
const regeneratorRuntime = require('regenerator-runtime'); //to avoid console error
import { isUrlValid } from './isUrlValid';
import axios from 'axios';

async function handleUserSubmit(url) {
  if (!isUrlValid(url)) return alert('please, check the url and try again');
  try {
    const URL = { url };

    const response = await axios.post('http://localhost:8081/add-url', URL);

    console.log(`returned Data are: `, res.data.data);
    // check to see if the returned data is valid

    if (res.data.data) {
      if (res.data.data.length > 1) {
        document.getElementById('result').innerHTML = res.data.data;
        document.getElementById('article-url').value = '';
      }
    } else {
      alert('looks like the article is empty !');
    }
  } catch (error) {
    return alert(error.message);
  }
}

export { handleUserSubmit };
