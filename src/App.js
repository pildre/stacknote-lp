import React from 'react';
import { Head, Root, Routes } from 'react-static';
import JssProvider from 'react-jss/lib/JssProvider';

import './app.scss';

const dashboardRoutes = [];

function App() {
  return (
    <JssProvider>
      <Root>
        <Head />
        <div className="content">
          <Routes />
        </div>
      </Root>
    </JssProvider>
  );
}

export default App;
