import axios from 'axios';
import PropTypes from 'prop-types';

import { KEY, BASE_URL } from './Key-url';

export async function getAllFilmsInfo(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

getAllFilmsInfo.propTypes = {
  page: PropTypes.number,
  movieId: PropTypes.number,
};
