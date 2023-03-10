import styled from 'styled-components';

export const WrapHistoryDocuments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  min-width: 30%;
  min-height: 120px;
  padding: 10px 20px;

  max-height: 150px;

  border: 1px solid gray;
  border-radius: 20px;
`;

export const List = styled.ul`
  display: block;
  list-style-type: none;
  overflow-y: auto;
`;
export const Item = styled.li`
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  &.Active {
    font-weight: bold;
    cursor: auto;
  }
`;
