import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getReviews } from '../Fetch/FetchFilms';
import * as SC from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <SC.SectionDiv>
      {reviews.length > 0 ? (
        <SC.UlReviews>
          {reviews.map(({ id, author, content }) => (
            <SC.ReviewLi key={id}>
              <SC.H3>Author: {author}</SC.H3>
              <SC.P>{content}</SC.P>
            </SC.ReviewLi>
          ))}
        </SC.UlReviews>
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </SC.SectionDiv>
  );
};

export default Reviews;
