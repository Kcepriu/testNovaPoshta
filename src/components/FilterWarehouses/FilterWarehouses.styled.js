import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Filter = styled.ul`
  display: flex;

  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;

  list-style: none;
  @media screen and (max-width: ${Style.tablet}) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (max-width: ${Style.tablet}) {
    display: none;
  }
`;

export const ItemFilter = styled.li`
  display: flex;
  align-items: center;

  padding: 4px 8px;
  text-align: center;
  vertical-align: center;

  background: ${Style.backgroundField};
  border: ${Style.borderField};

  border-radius: ${Style.borderRadiusField};

  cursor: pointer;

  @media screen and (max-width: ${Style.desktop}) {
    padding: 4px 8px;
  }

  &:hover {
    color: ${Style.hoverColor};
    border-color: ${Style.hoverColor};
  }

  &.Active {
    color: ${Style.ativeColor};
    border-color: ${Style.ativeColor};
  }
`;
