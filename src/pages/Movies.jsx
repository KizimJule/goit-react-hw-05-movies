import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { SearchBox } from '../components/SearchBox/SearchBox';
import * as SC from '../styled/Movies.styled';

const Movies = () => {
  const location = useLocation();

  const [searchMovies, setSearchMovies] = useState('');
  // console.log('searchMovies', searchMovies);

  return (
    <main>
      <SC.Section>
        <SearchBox setSearchMovies={setSearchMovies} />
        {searchMovies !== '' ? (
          <div>
            <SC.UlSearchFilms>
              {searchMovies.map(({ id, poster, title, vote_average }) => (
                <SC.Li key={id}>
                  <SC.LinkList to={`/movies/${id}`} state={{ from: location }}>
                    <SC.Img
                      src={
                        poster &&
                        poster !== 'https://image.tmdb.org/t/p/w500null'
                          ? poster
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
            </SC.UlSearchFilms>
          </div>
        ) : (
          <SC.P>No movies... Try to find something</SC.P>
        )}

        {searchMovies.length === 0 && searchMovies !== '' && (
          <SC.P>There is no movies with that name</SC.P>
        )}
      </SC.Section>
    </main>
  );
};

export default Movies;
