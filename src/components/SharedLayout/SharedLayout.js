import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Head, Header, Link, Nav } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Head>
        <Container>
          <Header>
            <Nav>
              <Link to="/" end>
                Перевірити ТТН
              </Link>
              <Link to="/warehouses">Список відділень</Link>
            </Nav>
          </Header>
        </Container>
      </Head>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
