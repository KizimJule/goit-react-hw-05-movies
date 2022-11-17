import { getReviews } from '../Fetch/FetchReviews';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);
  //   console.log(reviews, 'reviews');

  if (!reviews) {
    return null;
  }
  return (
    <section>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </section>
  );
};
