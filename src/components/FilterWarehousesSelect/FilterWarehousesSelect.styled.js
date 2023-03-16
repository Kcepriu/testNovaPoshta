import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (min-width: calc(${Style.tablet} + 1px)) {
    display: none;
  }
`;
export const Select = styled.select`
  margin-left: 10px;

  padding: 8px 16px;
  background-color: ${Style.backgroundField};
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusInput};
  border: ${Style.borderField};
`;
// export const ItemFilter = styled.option`

// `;
