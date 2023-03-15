import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  SectionPage,
  Container,
  Head,
  SectionFooter,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';
import ScrollToTopButton from 'components/ScrollToTopButton/ScrollToTopButton';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <SectionPage>
        <div>
          <Head>
            <Container>
              <Header />
            </Container>
          </Head>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
              <ScrollToTopButton />
            </Suspense>
          </Container>
        </div>
        <SectionFooter>
          <Container>
            <Footer />
          </Container>
        </SectionFooter>
      </SectionPage>
    </>
  );
};

export default SharedLayout;
