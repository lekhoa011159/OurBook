import Homepage from './Homepage/Loadable';
import LoginPage from './LoginPage/Loadable';
import Dashboard from './Dashboard/Loadable';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    path: '/login',
    exact: false,
    component: LoginPage,
  },
  {
    path: '/dashboard',
    private: true,
    exact: false,
    component: Dashboard,
  },
];

export default routes;
