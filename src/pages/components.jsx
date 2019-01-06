import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
//import { Link } from 'react-router-dom';
import { Link } from '@reach/router';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import SectionBasics from './ComponentsSections/SectionBasics.jsx';
import SectionNavbars from './ComponentsSections/SectionNavbars.jsx';
import SectionTabs from './ComponentsSections/SectionTabs.jsx';
import SectionPills from './ComponentsSections/SectionPills.jsx';
import SectionNotifications from './ComponentsSections/SectionNotifications.jsx';
import SectionTypography from './ComponentsSections/SectionTypography.jsx';
import SectionJavascript from './ComponentsSections/SectionJavascript.jsx';
import SectionCarousel from './ComponentsSections/SectionCarousel.jsx';
import SectionCompletedExamples from './ComponentsSections/SectionCompletedExamples.jsx';
import SectionLogin from './ComponentsSections/SectionLogin.jsx';
import SectionExamples from './ComponentsSections/SectionExamples.jsx';
import SectionDownload from './ComponentsSections/SectionDownload.jsx';

import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx';

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax image={require('assets/img/bg4.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Material Kit React.</h1>
                  <h3 className={classes.subtitle}>
                    A Badass Material-UI Kit based on Material Design.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={'/landing'} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
