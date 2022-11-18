import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 120px 20px;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom: 1px solid black;
`;
export const TitleH1 = styled.h1`
  margin: 0 0 20px 0;
  font-size: 30px;
  text-align: center;
`;

export const UlPopFilms = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const Li = styled.li`
  width: 200px;

  :hover,
  :focus {
    scale: 1.1;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const LinkList = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: #000;

  :hover,
  :focus {
    color: #fff;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
`;
export const DivDescr = styled.div`
  padding-top: 8px;
  width: 200px;
`;
export const PAboutFilm = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
`;
