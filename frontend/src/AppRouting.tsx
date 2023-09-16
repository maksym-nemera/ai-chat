import { FC } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { App } from './App';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/ai-agile-coach',
    element: <App />,
    errorElement: <div>Error</div>,
  },
  {
    path: '/not-found',
    element: <div>Not found</div>,
  },
]);

export const AppRouting: FC = () => {
  return <RouterProvider router={router} />;
};
