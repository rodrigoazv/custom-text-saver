// dependencies
import React from 'react';
export interface RouteSetting<Paths = string, SubRoutePaths = Paths> {
  path?: Paths;
  to?: string;
  component?: React.ComponentType;
  subroutes?: Route<SubRoutePaths>[];
}

export interface Route<Paths = string> extends RouteSetting {
  render(): JSX.Element | null;
}

export interface Router {
  addRoutes(routes: Route[]): void;
  compile(): JSX.Element | null;
}
