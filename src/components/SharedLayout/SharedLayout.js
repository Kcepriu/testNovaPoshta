import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Head, Header, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Head>
        <Container>
          <Header>
            <nav>
              <Link to="/" end>
                Documents
              </Link>
              <Link to="/warehouses">Warehouses</Link>
            </nav>
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
