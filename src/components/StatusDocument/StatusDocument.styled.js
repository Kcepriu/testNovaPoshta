import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const WrapStatusDocument = styled.div`
  min-width: 30%;
  min-height: 120px;
  padding: 10px 20px;

  flex-grow: 1;

  background: ${Style.backgroundField};
  border: ${Style.borderField};
  /* внутренняя тень */
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusField};
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
