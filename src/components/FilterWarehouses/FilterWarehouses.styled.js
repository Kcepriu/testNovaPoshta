const { default: styled } = require('styled-components');

export const Filter = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  list-style: none;
`;

export const ItemFilter = styled.li`
  border: 1px solid grey;
  border-radius: 10px;
  padding: 4px 4px;
  cursor: pointer;
  &:hover {
    background-color: azure;
  }
`;
