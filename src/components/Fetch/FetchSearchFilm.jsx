import axios from 'axios';
import PropTypes from 'prop-types';
import { KEY, BASE_URL } from './Key-url';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getSearchFilm(query, page = 1) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}`;
  const response = await axios.get(url);

  // console.log(response.data, '----data111');
  return response.data.results;
}

getSearchFilm.propTypes = {
  query: PropTypes.string,
  page: PropTypes.number,
};
