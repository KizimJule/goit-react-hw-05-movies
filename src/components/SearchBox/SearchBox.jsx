import * as SC from './SearchBox.styled';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchFilm } from '../Fetch/FetchSearchFilm';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const SearchBox = ({ setSearchMovies }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const filmQuery = searchQuery.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const query = form.elements.search.value;
    if (query.trim() === '') {
      // toast.error('Please, enter the word');
      alert('Oops!!! Enter the film name');
      return;
    }
    setSearchQuery({ query });
    form.reset();
  };

  useEffect(() => {
    if (!filmQuery) return;

    async function fetchFilms() {
      const dataFilms = await getSearchFilm(filmQuery);

      const requiredDataFilms = dataFilms.map(
        ({ id, title, poster_path: poster, vote_average }) => ({
          id,
          title,
          poster: 'https://image.tmdb.org/t/p/w500' + poster,
          vote_average,
        })
      );
      setSearchMovies(requiredDataFilms);
    }
    fetchFilms();
  }, [filmQuery, setSearchMovies]);

  return (
    <SC.Div>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SC.Button type="submit">Search</SC.Button>
      </SC.Form>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Div>
  );
};
