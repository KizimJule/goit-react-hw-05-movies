import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { SearchBox } from '../components/SearchBox/SearchBox';
// import { useSearchParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
// import { getSearchFilm } from '../components/Fetch/FetchSearchFilm';

export const Movies = () => {
  // const [searchQuery, setSearchQuery] = useSearchParams();
  // // const [serchFilms, setSearchFilms] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState('');

  // const filmQuery = searchQuery.get('query') ?? '';
  // const location = useLocation();
  // // useEffect(() => {
  // //   getSearchFilm(filmQuery).then(setSearchFilms);
  // // }, [filmQuery]);

  // useEffect(() => {
  //   if (!filmQuery) {
  //     return;
  //   }

  //   const fetchMovie = () => {
  //     setLoading(true);

  //     getSearchFilm(filmQuery)
  //       .then(results => {
  //         if (!results.length) {
  //           alert('No movies found!');
  //         }

  //         setMovies(results);
  //       })
  //       .catch(error => {
  //         setError('Ooops. Something went wrong...');
  //         console.log(error);
  //       })
  //       .finally(setLoading(false));
  //   };
  //   fetchMovie();
  // }, [filmQuery]);

  // const handleFormSubmit = newQuery => {
  //   if (newQuery === query) {
  //     alert('Boo');
  //   }
  //   setQuery(newQuery);
  //   console.log(filmQuery, '----v');
  // };

  // function handleFormSubmit(value) {
  //   setSearchQuery({ query: `${value}` });
  // }

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchQuery(nextParams);
  // };
  const [searchMovies, setSearchMovies] = useState([]);
  console.log('searchMovies', searchMovies);
  return (
    <main>
      <Container>
        <SearchBox setSearchMovies={setSearchMovies} />
      </Container>
    </main>
  );
};
