import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Mai from './Mai';

import Frame48098219 from '../raju+logo/src/pages/Frame48098219';
import PhonePlp from '../raju+logo/src/pages/PhonePlp';
import WebPlpHiddenFilter from '../raju+logo/src/pages/WebPlpHiddenFilter';
import WebPlpWithFilter from '../raju+logo/src/pages/WebPlpWithFilter';
import WebPlpWithFilterExpanded from '../raju+logo/src/pages/WebPlpWithFilterExpanded';


const router = createBrowserRouter([
  { path: '/', element: <Mai /> },
{ path: '/Frame48098219', element: <Frame48098219 /> },
{ path: '/PhonePlp', element: <PhonePlp /> },
{ path: '/WebPlpHiddenFilter', element: <WebPlpHiddenFilter /> },
{ path: '/WebPlpWithFilter', element: <WebPlpWithFilter /> },
{ path: '/WebPlpWithFilterExpanded', element: <WebPlpWithFilterExpanded /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}