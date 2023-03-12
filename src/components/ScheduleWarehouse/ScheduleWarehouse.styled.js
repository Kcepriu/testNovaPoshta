import styled from 'styled-components';

export const Schedule = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  width: 30%;
`;

export const ItemSchedule = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  align-items: center;
`;

export const Day = styled.p`
  width: 100%;
  text-align: center;
  background-color: beige;
  font-weight: bold;
`;
