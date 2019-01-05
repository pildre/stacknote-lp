import React from 'react';
import { Root, Routes } from 'react-static';
import { Link } from '@reach/router';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import './app.scss';

const dashboardRoutes = [];

function App() {
  return (
    <Root>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />
      <div className="content">
        <Routes />
      </div>
    </Root>
  );
}

export default App;
