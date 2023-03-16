import styled from 'styled-components';
// const { default: styled } = require('styled-components');

import * as Style from 'helpers/constatStyle';

export const WrapInformation = styled.div`
  position: relative;
  margin-top: 10px;
  display: flex;
  gap: 20px;
`;

export const ButtonShowHistory = styled.button`
  position: absolute;
  right: 8px;
  bottom: -24px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: ${Style.borderField};
  background: ${Style.backgroundField};
  box-shadow: ${Style.boxShadowField};
  width: 32px;
  height: 32px;
  padding: 1px;

  @media screen and (min-width: ${Style.tablet}) {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }

  &:hover {
    border-color: ${Style.ativeColor};
    /* background-color: ${Style.hoverColor}; */
  }
`;

export const WrapSearch = styled.div`
  position: relative;
  padding-left: 4px;
  padding-right: 4px;
`;
