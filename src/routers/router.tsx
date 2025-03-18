import { PATH } from '@routers/path';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@layouts/MainLayout/MainLayout';

import ErrorPage from '@pages/ErrorPage/ErrorPage';
import HomePage from '@pages/HomePage/HomePage';
import LpDetailPage from '@pages/LpDetailPage/LpDetailPage';
import LpListPage from '@pages/LpListPage/LpListPage';
import SigninPage from '@pages/SigninPage/SigninPage';
import SignupPage from '@pages/SignupPage/SignupPage';

export const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PATH.signin,
        element: <SigninPage />,
      },
      {
        path: PATH.signup,
        element: <SignupPage />,
      },
      {
        path: PATH.lp.list,
        element: <LpListPage />,
      },
      {
        path: PATH.lp.detail,
        element: <LpDetailPage />,
      },
    ],
  },
]);
