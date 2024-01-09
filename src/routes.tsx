import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export enum EROUTES_PATHS {
  HOME = '/',
  ORDERS = '/orders',
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: `${EROUTES_PATHS.HOME}`,
        element: <Dashboard />,
      },
      {
        path: `${EROUTES_PATHS.ORDERS}`,
        element: <Orders />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: `${EROUTES_PATHS.SIGN_IN}`,
        element: <SignIn />,
      },
      {
        path: `${EROUTES_PATHS.SIGN_UP}`,
        element: <SignUp />,
      },
    ],
  },
])
