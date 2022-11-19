import axios from 'axios';

export const KEY = 'f3ea910b205c898fa80453aad139450a';
export const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopFilms(page = 1) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  const { data } = await axios.get(url);
  return data.results;
}
getPopFilms();

export async function getAllFilmsInfo(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function getCast(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data;
}

export async function getReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`;
  const { data } = await axios.get(url);
  return data.results;
}

export async function getSearchFilm(query) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
}
