import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;

  width: 40px;
  height: 40px;
  cursor: pointer;

  border-radius: 50%;
  background-color: ${Style.backgroundField};
  border: ${Style.borderField};
  box-shadow: ${Style.boxShadowField};

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: ${Style.hoverColor};
  }
`;
