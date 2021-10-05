import { Switch, Route, RouteProps } from 'react-router-dom';

import { Applicants } from '../pages/applicants.page';
import { Events } from '../pages/events.page';
import { EventEdit } from '../pages/event-edit.page';
import React from 'react';
import { EventInfo } from '../pages/event-info.page';
import { SignInPage } from '../pages/signin.page';
import { SignUpPage } from '../pages/signup.page';

interface IRoute {
  path: string;
  Component: React.FC<RouteProps>;
  exact: boolean;
  breadcrumbName: string;
}

export const adminRoutes: IRoute[] = [
  { path: '/', Component: Events, exact: true, breadcrumbName: 'Home' },
  {
    path: '/signin',
    Component: SignInPage,
    exact: true,
    breadcrumbName: 'Signin',
  },
  {
    path: '/signup',
    Component: SignUpPage,
    exact: true,
    breadcrumbName: 'Signup',
  },
  {
    path: '/event/:id',
    Component: EventInfo,
    exact: true,
    breadcrumbName: 'Event',
  },
  {
    path: '/applicants',
    Component: Applicants,
    exact: false,
    breadcrumbName: 'Applicants',
  },
  {
    path: '/event/:id/edit',
    Component: EventEdit,
    exact: false,
    breadcrumbName: 'Event Editing',
  },
];

export const Router: React.FC = (): JSX.Element => (
  <Switch>
    {adminRoutes.map(({ path, Component, exact }) => (
      <Route key={path} path={path} exact={exact} component={Component} />
    ))}
  </Switch>
);
