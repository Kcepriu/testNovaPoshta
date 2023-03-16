import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';
import ReactPaginate from 'react-paginate';

export const MainPagination = styled(ReactPaginate)`
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 2rem;
  display: flex;
  gap: 2px;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 5rem;

  & li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;

    @media screen and (max-width: ${Style.tablet}) {
      padding: 0.1rem 0.3rem;
    }
  }
  & li.previous a,
  & li.next a,
  & li.break a {
    border-color: transparent;
  }
  & li.selected a {
    /* background-color: #0366d6; */
    background-color: ${Style.ativeColor};
    border-color: transparent;
    color: white;
    min-width: 24px;
  }
  & li.disabled a {
    color: grey;
  }
  & li.disable,
  & li.disabled a {
    cursor: default;
  }
`;
