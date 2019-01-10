import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import { Link } from '@reach/router';
import Button from 'components/CustomButtons/Button.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import { container } from 'assets/jss/material-kit-react.jsx';

const indexPageStyle = {
  container: {
    ...container
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    padding: '100px 30px 30px'
  },
  bg: {
    background: '#FFFFFF',
    height: '100vh'
  }
};

class IndexPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.bg}>
        <Header
          color="white"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
        />
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <h1>Welcome to React-Static</h1>
            <Link to="/components" className={classes.dropdownLink}>
              <Button color="primary">All components</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(indexPageStyle)(IndexPage);
