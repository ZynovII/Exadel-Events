import { Switch, Route } from 'react-router-dom';

import { Applicants } from '../pages/applicants.page';
import { Events } from '../pages/events.page';
import { EventEdit } from '../pages/event-edit.page';
import React from 'react';
import { EventInfo } from '../pages/event-info.page';

interface IRoute {
  path: string;
  Component: React.FC;
  exact: boolean;
}

export const routes: IRoute[] = [
  { path: '/', Component: Events, exact: true },
  { path: '/event/:id', Component: EventInfo, exact: true },
  { path: '/applicants', Component: Applicants, exact: false },
  { path: '/event/:id/edit', Component: EventEdit, exact: false },
];

export const Router: React.FC = (): JSX.Element => (
  <Switch>
    {routes.map(({ path, Component, exact }) => (
      <Route key={path} path={path} component={Component} exact={exact} />
    ))}
  </Switch>
);
