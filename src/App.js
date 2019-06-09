import React from 'react';
import { Head, Root, Routes } from 'react-static';
import JssProvider from 'react-jss/lib/JssProvider';
import Logger from 'lib/Logger';

import './app.scss';

class App extends React.Component {
  componentDidMount() {
    Logger.setTracker();
  }
  render() {
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
}
export default App;
