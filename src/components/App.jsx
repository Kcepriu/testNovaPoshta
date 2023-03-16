import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../layout/SharedLayout/SharedLayout';
import { urlDocuments, urlWarehouses } from 'helpers/constatnRoutes';

const Documents = lazy(() => import('pages/Documents/Documents'));
const Warehouses = lazy(() => import('pages/Warehouses/Warehouses'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Documents />} />
          <Route path={`${urlDocuments}/:documentId`} element={<Documents />} />
          <Route path={urlWarehouses} element={<Warehouses />} />
          <Route path={`${urlWarehouses}/:cityId`} element={<Warehouses />} />
        </Route>
        <Route path="*" element={<Navigate to="" replace />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
