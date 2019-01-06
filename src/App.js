import React from 'react';
import { Head, Root, Routes } from 'react-static';
import { Link } from '@reach/router';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import './app.scss';

const dashboardRoutes = [];

function App() {
  return (
    <Root>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          rel="stylesheet"
        />
      </Head>
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
