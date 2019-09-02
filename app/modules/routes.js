import Homepage from './Homepage/Loadable';
import SignupPage from './SignupPage/Loadable';
import Dashboard from './Dashboard/Loadable';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    path: '/signup',
    exact: false,
    component: SignupPage,
  },
  {
    path: '/dashboard',
    exact: false,
    component: Dashboard,
  },
];

export default routes;
