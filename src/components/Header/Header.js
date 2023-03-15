import { HeaderPage, Nav, Link } from './Header.styled';
import * as Texts from 'helpers/constantText';

const Header = () => {
  return (
    <HeaderPage>
      <Nav>
        <Link to="/" end>
          {Texts.verify}
        </Link>
        <Link to="/warehouses">{Texts.departmentsList}</Link>
      </Nav>
    </HeaderPage>
  );
};
export default Header;
