import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
import * as SC from './App.styled';

export const App = () => {
  return (
    <SC.Div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={MovieDetails}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </SC.Div>
  );
};
