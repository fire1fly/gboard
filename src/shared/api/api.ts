import axios from 'axios';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(LOCALSTORAGE_USER_KEY) || '',
  },
});
