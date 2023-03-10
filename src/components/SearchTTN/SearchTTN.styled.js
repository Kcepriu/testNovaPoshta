import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 8px 16px;
`;
export const Buttom = styled.button`
  border-radius: 10px;
  padding: 4px 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: blue;
  }
`;
