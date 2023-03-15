import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const SectionPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 100%;
`;

export const Head = styled.div`
  box-shadow: ${Style.boxShadow};
  margin-bottom: 10px;
`;

export const SectionFooter = styled.div`
  box-shadow: ${Style.boxShadowFooter};
`;

export const Container = styled.div`
  width: 100%;

  display: block;
  max-width: ${Style.mobile};
  /* width: ${Style.mobile}; */
  margin: 0 auto;
  padding: 0;

  @media screen and (min-width: ${Style.tablet}) {
    max-width: ${Style.tablet};
    width: ${Style.tablet};
  }

  @media screen and (min-width: ${Style.desktop}) {
    max-width: ${Style.desktop};
    width: ${Style.desktop};
  }
`;
