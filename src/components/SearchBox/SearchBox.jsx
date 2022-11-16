import { Wrapper, Input, Button } from './SearchBox.styled';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getSearchFilm } from '../Fetch/FetchSearchFilm';

export const SearchBox = ({ setSearchMovies }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const filmQuery = searchQuery.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const query = form.elements.search.value;

    setSearchQuery({ query });
    form.reset();

    // if (filmQuery.trim() === '') {
    //   // toast.error('Please, enter the word');
    //   alert('Oops!!!');
    //   return;
    // }

    // setSearchQuery('');
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
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </Wrapper>
  );
};
