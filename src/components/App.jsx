import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Reviews/Reviews';

import * as SC from './App.styled';

export const App = () => {
  return (
    <SC.Div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            {/* <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </SC.Div>
  );
};
