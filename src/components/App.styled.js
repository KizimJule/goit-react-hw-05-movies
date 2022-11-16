import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* font-size: 40px; */
  color: #010101;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  width: 100%;

  > nav {
    display: flex;
    gap: 20px;
  }
`;
