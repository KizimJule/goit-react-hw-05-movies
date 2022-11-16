import axios from 'axios';
import PropTypes from 'prop-types';

import { KEY, BASE_URL } from './Key-url';

export async function getCast(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

getCast.propTypes = {
  movieId: PropTypes.number,
};
