import styled from 'styled-components';
import * as Style from 'helpers/constatStyle';

export const FooterPage = styled.div`
  width: 100%;
  max-width: 100%;
  min-height: 60px;
  background-color: ${Style.backgroundColorFooter};
  color: white;
`;

export const WrapContacts = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 8px;

  font-size: 16px;
  line-height: 16px;
`;

export const WrapSocialsContacts = styled.div`
  position: relative;
  width: 100%;
`;

export const SocialsContacts = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 5px;

  @media screen and (max-width: 390px) {
    align-items: center;
  }

  @media screen and (min-width: ${Style.tablet}) {
    flex-direction: row;
    gap: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
`;

export const LinkContact = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    color: ${Style.ativeColor};
  }
`;
export const TextSocials = styled.span`
  @media screen and (max-width: 390px) {
    display: none;
  }
`;
