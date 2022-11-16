import styled from 'styled-components';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Button = styled.button`
  display: inline-block;
  /* width: 104px; */
  /* height: 66px; */
  border-radius: 8px;
  padding: 16px 18px;
  /* border: 0; */
  cursor: pointer;
  outline: none;
  margin-left: 12px;
  font-size: 24px;

  &:hover,
  &:focus {
    background-color: grey;
  }
`;
