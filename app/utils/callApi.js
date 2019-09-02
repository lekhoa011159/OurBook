import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function callApiWithAuth(url, method, params) {
  return axios({
    url,
    method,
    data: params,
    headers: {
      Authorization: cookies.get('ob_token'),
    },
  });
}

export function callApiWithoutAuth(url, method, params) {
  return axios({
    url,
    method,
    data: params,
  });
}
