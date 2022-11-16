import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPopFilms } from '../components/Fetch/Fetch-popular-films';

export const Home = () => {
  const [popFilms, setPopFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopFilms().then(setPopFilms);
  }, []);

  return (
    <main>
      <Container>
        <ul>
          {popFilms.map(popFilm => (
            <li key={popFilm.id}>
              <Link to={`/movies/${popFilm.id}`} state={{ from: location }}>
                {popFilm.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
};
