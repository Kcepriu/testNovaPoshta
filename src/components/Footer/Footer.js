import { FooterPage } from './Footer.styled';
import {
  SocialsContacts,
  Contacts,
  WrapContacts,
  WrapSocialsContacts,
  LinkContact,
  TextSocials,
} from './Footer.styled';

import IconToButton from 'components/IconToButton/IconToButton';

const Footer = () => {
  return (
    <FooterPage>
      <WrapContacts>
        <WrapSocialsContacts className="TEST">
          <SocialsContacts>
            <li>
              <LinkContact
                href="https://www.linkedin.com/in/serhii-kostiuchenko"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                <IconToButton nameIcon="icon-linkedin" />
                <TextSocials>Linkedin</TextSocials>
              </LinkContact>
            </li>
            <li>
              <LinkContact
                href="https://github.com/Kcepriu/"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                <IconToButton nameIcon="icon-github" />
                <TextSocials>GitHub</TextSocials>
              </LinkContact>
            </li>
            <li>
              <LinkContact
                href="https://www.codewars.com/users/Kcepriu"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                <IconToButton nameIcon="icon-codewars" />
                <TextSocials>Codewars</TextSocials>
              </LinkContact>
            </li>
          </SocialsContacts>
        </WrapSocialsContacts>

        <Contacts>
          <li>
            <LinkContact
              href="tel:+380976841577"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              <IconToButton nameIcon="icon-smartphone" className="Contacts" />
              +38-097-684-15-77
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://t.me/SerhiiKostiuchenko"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              <IconToButton nameIcon="icon-telegram" className="Contacts" />
              @SerhiiKostiuchenko
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="mailto:serhii.kostuchenko@gmail.com"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              <IconToButton nameIcon="icon-email" className="Contacts" />
              serhii.kostuchenko@gmail.com
            </LinkContact>
          </li>
        </Contacts>
      </WrapContacts>
    </FooterPage>
  );
};

export default Footer;
