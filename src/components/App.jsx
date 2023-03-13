import { Routes, Route, Navigate } from 'react-router-dom';
import Documents from 'pages/Documents/Documents';
import Warehouses from 'pages/Warehouses/Warehouses';
import SharedLayout from '../layout/SharedLayout/SharedLayout';
// import NotFound from '../pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Documents />} />
          <Route path="/documents/:documentId" element={<Documents />} />
          <Route path="/warehouses" element={<Warehouses />} />
          <Route path="/warehouses/:cityId" element={<Warehouses />} />
        </Route>
        <Route path="*" element={<Navigate to="" replace />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
