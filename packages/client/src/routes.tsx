import { Applicants } from './pages/applicants.page';
import { Events } from './pages/events.page';
import { Switch, Route } from 'react-router-dom';

export const routes = [
  { path: '/', Component: Events, exact: true },
  { path: '/applicants', Component: Applicants },
];

export const Router = () => {
  return (
    <Switch>
      {routes.map(({ path, Component, exact }) => (
        <Route key={path} path={path} component={Component} exact={exact} />
      ))}
    </Switch>
  );
};
