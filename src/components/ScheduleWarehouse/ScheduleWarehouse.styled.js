import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Schedule = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  max-width: 400px;
  @media screen and (max-width: ${Style.tablet}) {
    flex-direction: column;
  }
`;

export const ItemSchedule = styled.li`
  display: flex;
  width: calc(100% / 7);
  flex-direction: column;
  border: 1px solid gray;
  align-items: center;
  @media screen and (max-width: ${Style.tablet}) {
    flex-direction: row;
    width: 150px;
  }
`;

export const Day = styled.p`
  text-align: center;
  background-color: beige;
  font-weight: bold;
  @media screen and (max-width: ${Style.tablet}) {
    margin-right: 15px;
  }
`;
