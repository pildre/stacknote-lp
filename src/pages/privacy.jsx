import React from 'react';
import { RouteData } from 'react-static';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import marked from 'lib/marked';
import Constants from 'lib/Constants';

import { Link } from '@reach/router';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';

import { container } from 'assets/jss/material-kit-react.jsx';
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.jsx';
const privacyPageStyle = {
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
  sectionTitle: {
    fontSize: '3.2rem',
    display: 'inline-block',
    position: 'relative',
    fontWeight: '600',
    marginTop: '0px'
  },
  ...imagesStyle,
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px 0 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    paddingTop: '110px',
    paddingBottom: '40px'
  },
  bg: {
    background: '#FFFFFF',
    height: '100vh'
  },
  section: {
    padding: '20px 0'
    /*textAlign: 'center'*/
  },
  sectionCentered: {
    padding: '20px 0',
    textAlign: 'center'
  },
  description: {
    color: '#999'
  },
  planCardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600'
  }
};

class Privacy extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <RouteData>
        {({ markdownText }) => (
          <div className={classes.bg}>
            <Header
              color="white"
              brand={Constants.appName}
              rightLinks={<HeaderLinks />}
              fixed
            />
            <div className={classNames(classes.main)}>
              <div className={classes.container}>
                <div
                  className="markdown-body"
                  dangerouslySetInnerHTML={{ __html: marked(markdownText) }}
                />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </RouteData>
    );
  }
}

export default withStyles(privacyPageStyle)(Privacy);
