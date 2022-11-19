import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getPopFilms } from '../components/Fetch/FetchFilms';
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
        <SC.TitleH1>Trending Today</SC.TitleH1>
        <SC.UlPopFilms>
          {popFilms.map(({ id, poster_path, title, vote_average }) => (
            <SC.Li key={id}>
              <SC.LinkList to={`/movies/${id}`} state={{ from: location }}>
                <SC.Img
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + poster_path
                      : 'https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo'
                  }
                  alt={title}
                  width="200"
                  height="240"
                />
                <SC.DivDescr>
                  <SC.PAboutFilm>{title} </SC.PAboutFilm>
                  {vote_average !== 0 && (
                    <SC.PAboutFilm>
                      Rating: {vote_average.toFixed(1)}
                    </SC.PAboutFilm>
                  )}
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
