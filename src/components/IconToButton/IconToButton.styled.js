import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Icon = styled.svg`
  margin-left: 10px;
  width: 16px;
  height: 16px;
  fill: currentColor;

  @media screen and (min-width: ${Style.tablet}) {
    width: 24px;
    height: 24px;
  }

  &.Contacts {
    width: 16px;
    height: 16px;
  }

  &.iconButtonFavorite {
    width: 16px;
    height: 16px;

    fill: none;
    /* stroke: #4440f7; */
  }
`;
