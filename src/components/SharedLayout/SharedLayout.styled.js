import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const Head = styled.div`
  box-shadow: 0px 3px 10px 5px rgba(135, 124, 124, 0.75);
  margin-bottom: 10px;
`;

export const Container = styled.div`
  max-width: ${Style.mobile};
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: ${Style.tablet}) {
    max-width: ${Style.tablet};
  }

  @media screen and (min-width: ${Style.desktop}) {
    max-width: ${Style.desktop};
  }
`;

export const Header = styled.header`
  padding: 8px 8px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const Link = styled(NavLink)`
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid gray;
  text-decoration: none;
  color: black;
  font-weight: 500;

  width: 50%;
  text-align: center;
  cursor: pointer;

  &.active {
    color: orangered;
  }

  /* outline: 1px solid red; */
`;
