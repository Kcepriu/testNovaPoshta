import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Form = styled.form`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  padding: 8px 16px;
  background-color: ${Style.backgroundField};
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusInput};
  border: ${Style.borderField};
`;

export const Buttom = styled.button`
  position: absolute;
  top: 2px;
  right: 1px;

  background-color: ${Style.backgroundField};
  /* border-radius: ${Style.borderRadiusInput}; */
  border: none;
  padding: 2px 2px;
  border-top-right-radius: ${Style.borderRadiusInput};
  border-bottom-right-radius: ${Style.borderRadiusInput};
  box-shadow: ${Style.boxShadowField};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${Style.hoverColor};
    box-shadow: none;
  }
`;
