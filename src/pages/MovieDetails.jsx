import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { getAllFilmsInfo } from '../components/Fetch/FetchAllFilmInfo';
import * as SC from '../styled/MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [allFilmsInfo, setAllFilmsInfo] = useState();

  useEffect(() => {
    getAllFilmsInfo(movieId).then(setAllFilmsInfo);
  }, [movieId]);

  // if (!movieId) {
  //   return;
  // }

  if (!allFilmsInfo) {
    return null;
  }
  const releaseDate = allFilmsInfo.release_date;
  let date = new Date(releaseDate);

  // console.log(allFilmsInfo.genres);

  return (
    <main>
      <SC.Section>
        <Link to={location.state?.from ?? '/'}>
          <button>Go back</button>
        </Link>

        <SC.FilmCardDiv>
          <img
            src={'https://image.tmdb.org/t/p/w500' + allFilmsInfo.poster_path}
            alt={allFilmsInfo.title}
            width="300"
            loading="lazy"
          />

          <div>
            <h1>
              {allFilmsInfo.title} ({date.getFullYear()})
            </h1>
            <p>{`User score: ${(allFilmsInfo.vote_average * 10).toFixed(
              2
            )}%`}</p>
            <h3>Overview:</h3>
            <p>{allFilmsInfo.overview}</p>

            <h3>Genres:</h3>
            <p>{allFilmsInfo.genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </SC.FilmCardDiv>
        <SC.Section>
          <p>Additional information</p>
          <ul>
            <li>
              <Link
                to="cast"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to="cast"
                state={{ from: location.state?.from ?? '/movies' }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </SC.Section>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </SC.Section>
    </main>
  );
};
