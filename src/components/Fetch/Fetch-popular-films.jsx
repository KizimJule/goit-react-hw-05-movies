import axios from 'axios';

import { KEY, BASE_URL } from './Key-url';

export async function PopFilmsAPI(page = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  const { data } = await axios.get(url);

  return data;
}
