import axios from 'axios';
import {API_URL, API_KEY} from 'shared/constants/api';

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_KEY
  }
});

