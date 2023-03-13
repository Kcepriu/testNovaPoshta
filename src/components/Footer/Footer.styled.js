import styled from 'styled-components';

export const FooterPage = styled.div`
  /* margin-top: 60px; */
  display: block;
  width: 100%;
  min-height: 60px;

  background-color: #4d4d50;
  color: white;
`;

export const WrapContacts = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding: 8px;
`;

export const WrapSocialsContacts = styled.div`
  position: relative;
  width: 100%;
`;

export const SocialsContacts = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  gap: 20px;
  list-style: none;
`;

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
  list-style: none;
`;

export const LinkContact = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;
