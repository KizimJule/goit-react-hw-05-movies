import styled from 'styled-components';

export const SectionDiv = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UlCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  gap: 20px;
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
export const Li = styled.li`
  width: 200px;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
  /* object-fit: cover; */
  /* width: 200x;
  height: 320px; */
`;
export const DivDescr = styled.div`
  padding-top: 8px;
  width: 200px;
`;

export const P = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
`;
export const PCharacter = styled.p`
  margin: 0;
  font-size: 18px;
`;
