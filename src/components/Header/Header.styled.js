import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const HeaderPage = styled.header`
  width: 100%;
  padding: 8px 8px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const Link = styled(NavLink)`
  padding: 4px 6px;
  background: #ebebeb;
  border: 1px solid #ffffff;
  border-radius: 20px;

  text-decoration: none;
  color: black;
  font-weight: 500;

  width: 50%;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${Style.hoverColor};
    border: 1px solid ${Style.hoverColor};
  }
  &.active {
    color: ${Style.ativeColor};
    border: 1px solid ${Style.ativeColor};
  }

  @media screen and (min-width: ${Style.tablet}) {
    width: 150px;
  }
`;
