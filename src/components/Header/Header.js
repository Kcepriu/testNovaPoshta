import { HeaderPage, Nav, Link } from './Header.styled';
import { useHref } from 'react-router-dom';
import * as Texts from 'helpers/constantText';
import { urlWarehouses } from 'helpers/constatnRoutes';

const Header = () => {
  const myUrl = useHref();
  const isWarehouses = myUrl.includes(urlWarehouses);

  return (
    <HeaderPage>
      <Nav>
        <Link to="/" className={isWarehouses ? '' : 'active'} end>
          {Texts.verify}
        </Link>
        <Link to={urlWarehouses} className={isWarehouses ? 'active' : ''}>
          {Texts.departmentsList}
        </Link>
      </Nav>
    </HeaderPage>
  );
};
export default Header;
