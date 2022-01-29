import React from 'react';
import { Router, Route, RouteSetting } from '~/common/data/protocols';

import { useRoutes, Navigate, Outlet, RouteObject } from 'react-router-dom';

export class ReactRouterDomRouter implements Router {
  routes: Route<string>[] = [];

  addRoutes(routes: Route<string>[]): void {
    this.routes = [...this.routes, ...routes];
  }

  private parseRoute = (route: Route): RouteObject => {
    if (route.to) {
      return {
        path: route.path,
        element: React.createElement(Navigate, { to: route.to }),
      };
    }

    const subroutes = route.subroutes;
    const element = route.render();

    return {
      path: route.path,
      element,
      children: subroutes ? subroutes.map(this.parseRoute) : undefined,
    };
  };

  compile(): JSX.Element | null {
    const routes = this.routes;

    return React.createElement(() => {
      const element = useRoutes(routes.map(this.parseRoute));
      return element;
    });
  }
}

export class ReactRouterDomRoute implements Route {
  path?: string;
  to?: string;
  component?: React.ComponentType;
  subroutes?: Route[];

  constructor({ path, to, component, subroutes }: RouteSetting) {
    this.path = path;
    this.to = to;
    this.component = component;
    this.subroutes = subroutes;
  }

  render(): JSX.Element | null {
    const routeContent = React.createElement(Outlet);
    if (!this.component) {
      return routeContent;
    }

    return React.createElement(this.component, {}, routeContent);
  }
}
