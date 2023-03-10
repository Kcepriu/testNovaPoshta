import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  SectionPage,
  Container,
  Head,
  Header,
  Link,
  Nav,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <SectionPage>
        <div>
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
              <ScrollToTopButton />
            </Suspense>
          </Container>
        </div>

        <Container>
          <Footer />
        </Container>
      </SectionPage>
    </>
  );
};

export default SharedLayout;
