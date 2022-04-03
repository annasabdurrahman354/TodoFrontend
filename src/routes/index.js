import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Buttons = lazy(() => import('../pages/dashboards/Buttons'))
const Cards = lazy(() => import('../pages/dashboards/Cards'))
const Charts = lazy(() => import('../pages/dashboards/Charts'))
const Dashboard = lazy(() => import('../pages/dashboards/Dashboard'))
const Modals = lazy(() => import('../pages/dashboards/Modals'))
const Forms = lazy(() => import('../pages/dashboards/Forms'))
const Tables = lazy(() => import('../pages/dashboards/Tables'))
const Page404 = lazy(() => import('../pages/dashboards/404'))
const Blank = lazy(() => import('../pages/dashboards/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
