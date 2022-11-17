import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Movies = () => {
  const location = useLocation();

  const [searchMovies, setSearchMovies] = useState([]);
  // console.log('searchMovies', searchMovies);

  return (
    <main>
      <Container>
        <SearchBox setSearchMovies={setSearchMovies} />
        <div>
          <ul>
            {searchMovies.map(searchFilm => (
              <li key={searchFilm.id}>
                <Link
                  to={`/movies/${searchFilm.id}`}
                  state={{ from: location }}
                >
                  {searchFilm.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};
