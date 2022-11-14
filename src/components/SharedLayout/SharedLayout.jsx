import * as SC from './SharedLayout.styled';

import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <SC.Container>
      <SC.Header>
        <nav>
          <SC.StyledLink to="/">Home</SC.StyledLink>
          <SC.StyledLink to="/movies">Movies</SC.StyledLink>
        </nav>
      </SC.Header>
      <Outlet />
    </SC.Container>
  );
};
