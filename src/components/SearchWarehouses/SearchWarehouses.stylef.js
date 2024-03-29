import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Label = styled.label`
  margin-top: 5px;
`;

export const Input = styled.input`
  margin-left: 10px;

  padding: 8px 16px;
  background-color: ${Style.backgroundField};
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusInput};
  border: ${Style.borderField};
`;
