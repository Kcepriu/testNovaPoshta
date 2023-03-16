import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const WrapCity = styled.div`
  position: relative;
  margin-top: 10px;
`;

export const WrapDescriptionCity = styled.div`
  display: blok;
  width: 100%;

  padding: 8px 16px;
  cursor: pointer;

  background: ${Style.backgroundField};
  border: ${Style.borderField};
  /* внутренняя тень */
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusField};
`;

export const WrapSearchCity = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  padding: 8px 16px;

  background: ${Style.backgroundField};
  border: ${Style.borderField};
  /* внутренняя тень */
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusField};
`;
