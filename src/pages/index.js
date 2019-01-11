import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import { Link } from '@reach/router';
import Button from 'components/CustomButtons/Button.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import { container } from 'assets/jss/material-kit-react.jsx';

const indexPageStyle = {
  container,
  brand: {
    color: '#FFFFFF',
    textAlign: 'left'
  },
  title: {
    fontSize: '4.2rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0'
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
          color="transparent"
          brand="Stacknote"
          rightLinks={<HeaderLinks />}
          fixed
        />
        <Parallax image={require('assets/img/colorful-colourful-paper.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Stacknote</h1>
                  <h3 className={classes.subtitle}>
                    Stacknote is an application that can create long sentences
                    by stacking short sentences like a chat application. It
                    makes your writing surprisingly efficient.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
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
