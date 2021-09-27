import { Switch, Route, RouteProps } from 'react-router-dom';

import { Applicants } from '../pages/applicants.page';
import { Events } from '../pages/events.page';
import { EventEdit } from '../pages/event-edit.page';
import React from 'react';
import { EventInfo } from '../pages/event-info.page';

interface IRoute {
  path: string;
  Component: React.FC<RouteProps>;
  exact: boolean;
  breadcrumbName: string;
}

export const adminRoutes: IRoute[] = [
  { path: '/', Component: Events, exact: true, breadcrumbName: 'Home' },
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
