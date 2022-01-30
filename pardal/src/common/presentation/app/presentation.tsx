// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


function AppPresentational(props: any) {
  const {
    children,
  } = props;

  return (
    <BrowserRouter>
        {children}    
    </BrowserRouter>
  );
}

export default AppPresentational;