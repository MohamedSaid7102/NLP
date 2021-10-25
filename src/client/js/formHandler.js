const regeneratorRuntime = require('regenerator-runtime'); //to avoid console error
import { isUrlValid } from './isUrlValid';
import axios from 'axios';

const Agreement = document.querySelector('#agreement');
const Confidence = document.querySelector('#confidence');
const Irony = document.querySelector('#irony');
const Model = document.querySelector('#model');
const Score_tag = document.querySelector('#score_tag');
const Result = document.querySelector('#result');

async function handleUserSubmit(url) {
  if (!isUrlValid(url)) return alert('please, check the url and try again');
  await axios
    .post('http://localhost:8083/add-url', { url })
    .then((res) => {
      const agreement = res.data.data.agreement;
      const confidence = res.data.data.confidence;
      const irony = res.data.data.irony;
      const model = res.data.data.model;
      const score_tag = res.data.data.score_tag;
      console.log(`Clint: The data from the backend is :`, agreement);
      if (res.data.data && res.data.data.length != 0) {
        Result.style.display = 'block';
        Agreement.innerText = agreement;
        Confidence.innerText = confidence;
        Irony.innerText = irony;
        Model.innerText = model;
        Score_tag.innerText = score_tag;
        // Cleaning input
        document.getElementById('article-url').value = '';
      }
    })
    .catch((error) => {
      console.log('Error happened: ', error);
      alert('looks like the article is empty !', error);
    });
}

export { handleUserSubmit };
