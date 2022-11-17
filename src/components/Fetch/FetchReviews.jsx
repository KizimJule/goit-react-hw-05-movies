import axios from 'axios';
import PropTypes from 'prop-types';

import { KEY, BASE_URL } from './Key-url';

export async function getReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data.results;
}
getReviews.propTypes = {
  movieId: PropTypes.number,
};
