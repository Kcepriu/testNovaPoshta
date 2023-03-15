import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const WrapHistoryDocuments = styled.div`
  position: relative;
  display: flex;

  min-height: 120px;
  padding: 10px 20px;

  max-height: 250px;
  background: ${Style.backgroundField};
  border: ${Style.borderField};
  /* внутренняя тень */
  box-shadow: ${Style.boxShadowField};
  border-radius: ${Style.borderRadiusField};

  @media screen and (max-width: ${Style.tablet}) {
    position: absolute;
    top: 0;
    right: 0;

    &.hiden {
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
  }
`;

export const FiledHistoryDocuments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const List = styled.ul`
  display: block;
  list-style-type: none;
  overflow-y: auto;
  padding-right: 8px;
`;
export const Item = styled.li`
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: ${Style.hoverColor};
  }

  &.Active {
    font-weight: bold;
    cursor: auto;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 1px;
  background-color: transparent;
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  &:hover {
    border-color: ${Style.ativeColor};
    background-color: ${Style.hoverColor};
  }
`;
