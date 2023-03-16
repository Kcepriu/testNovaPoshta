import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const WrapSearchCity = styled.div`
  display: blok;
  min-height: 110px;
`;

export const Label = styled.label`
  /* margin-top: 30px; */
`;

export const Input = styled.input`
  width: 210px;
  margin-left: 10px;
  padding: 8px 16px;
  background-color: ${Style.backgroundField};
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusInput};
  border: ${Style.borderField};
`;
