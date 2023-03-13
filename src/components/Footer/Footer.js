import { FooterPage } from './Footer.styled';
import {
  SocialsContacts,
  Contacts,
  WrapContacts,
  WrapSocialsContacts,
  LinkContact,
} from './Footer.styled';

import { ReactComponent as IconEmail } from '../../images/email.svg';
import { ReactComponent as IconPhone } from '../../images/smartphone.svg';
import { ReactComponent as IconTelegram } from '../../images/telegram.svg';
import { ReactComponent as IconCodeward } from '../../images/codewars.svg';
import { ReactComponent as IconGithub } from '../../images/github.svg';
import { ReactComponent as IconLinkedin } from '../../images/linkedin.svg';

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
                <IconLinkedin width="24" height="24" />
                Linkedin
              </LinkContact>
            </li>
            <li>
              <LinkContact
                href="https://github.com/Kcepriu/"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                <IconGithub width="24" height="24" />
                GitHub
              </LinkContact>
            </li>
            <li>
              <LinkContact
                href="https://www.codewars.com/users/Kcepriu"
                target="_blank"
                rel="noreferrer noopener, nofollow"
              >
                <IconCodeward width="24" height="24" />
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
              <IconPhone width="16" />
              +38-097-684-15-77
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://t.me/SerhiiKostiuchenko"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              <IconTelegram width="16" />
              @SerhiiKostiuchenko
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="mailto:serhii.kostuchenko@gmail.com"
              target="_blank"
              rel="noreferrer noopener, nofollow"
            >
              <IconEmail width="16" />
              serhii.kostuchenko@gmail.com
            </LinkContact>
          </li>
        </Contacts>
      </WrapContacts>
    </FooterPage>
  );
};

export default Footer;
