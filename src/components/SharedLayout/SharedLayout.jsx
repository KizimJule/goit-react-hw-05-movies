import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as SC from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Section>
          <SC.Nav>
            <SC.StyledLink to="/" end>
              Home
            </SC.StyledLink>
            <SC.StyledLink to="/movies">Movies</SC.StyledLink>
          </SC.Nav>
        </SC.Section>
      </SC.Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SC.Container>
  );
};
