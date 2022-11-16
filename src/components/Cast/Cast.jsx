import { getCast } from '../Fetch/FetchCast';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return null;
  }
  console.log(cast.cast);
  return (
    <section>
      {cast.cast.length > 0 ? (
        <ul>
          {cast.cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo'
                }
                alt={name}
                width="200"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast</p>
      )}
    </section>
  );
};
