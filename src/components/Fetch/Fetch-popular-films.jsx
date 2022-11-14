import axios from 'axios';
import PropTypes from 'prop-types';

import { KEY, BASE_URL } from './Key-url';

export async function getPopFilms(page = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  const { data } = await axios.get(url);
  //   console.log(data.results);
  //   console.log(data, 'data');

  return data.results;
}
getPopFilms();

getPopFilms.propTypes = {
  page: PropTypes.number,
};
