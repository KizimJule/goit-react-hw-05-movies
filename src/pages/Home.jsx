import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopFilms } from '../components/Fetch/Fetch-popular-films';
import * as SC from '../styled/Home.styled';

const Home = () => {
  const [popFilms, setPopFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getPopFilms().then(setPopFilms);
  }, []);

  // console.log('popFilms', popFilms);

  return (
    <main>
      <SC.Section>
        <SC.UlPopFilms>
          {popFilms.map(popFilm => (
            <SC.Li key={popFilm.id}>
              <SC.LinkList
                to={`/movies/${popFilm.id}`}
                state={{ from: location }}
              >
                {' '}
                <SC.Img
                  src={
                    popFilm.poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + popFilm.poster_path
                      : 'https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo'
                  }
                  alt={popFilm.title}
                  width="200"
                  height="240"
                />
                <SC.DivDescr>
                  <SC.PAboutFilm>{popFilm.title} </SC.PAboutFilm>
                  <SC.PAboutFilm>Rating: {popFilm.vote_average}</SC.PAboutFilm>
                </SC.DivDescr>
              </SC.LinkList>
            </SC.Li>
          ))}
        </SC.UlPopFilms>
      </SC.Section>
    </main>
  );
};

export default Home;
