import { FooterPage } from './Footer.styled';
import {
  SocialsContacts,
  Contacts,
  WrapContacts,
  WrapSocialsContacts,
  LinkContact,
} from './Footer.styled';
const Footer = () => {
  return (
    <FooterPage>
      <WrapContacts>
        <WrapSocialsContacts>
          <SocialsContacts>
            <li>
              <LinkContact
                href="https://www.linkedin.com/in/serhii-kostiuchenko"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                Linkedin
              </LinkContact>
            </li>
            <li>
              <LinkContact
                href="https://github.com/Kcepriu/"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                GitHub
              </LinkContact>
            </li>
            <li>
              <LinkContact
                href="https://github.com/Kcepriu/"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                Codewars
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
              +38-097-684-15-77
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://t.me/SerhiiKostiuchenko"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              @SerhiiKostiuchenko
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="mailto:serhii.kostuchenko@gmail.com"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              serhii.kostuchenko@gmail.com
            </LinkContact>
          </li>
        </Contacts>
      </WrapContacts>
    </FooterPage>
  );
};

export default Footer;
