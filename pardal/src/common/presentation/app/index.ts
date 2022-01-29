// Dependencies
import React, { FunctionComponent } from 'react';

// Presentational
import AppPresentational from './presentation';


export function App(props: any) {

  return AppPresentational({
    children: props.children,
  });
}
