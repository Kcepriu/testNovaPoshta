import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../layout/SharedLayout/SharedLayout';
const Documents = lazy(() => import('pages/Documents/Documents'));
const Warehouses = lazy(() => import('pages/Warehouses/Warehouses'));

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
