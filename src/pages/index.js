import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';

import { Link } from '@reach/router';
import Button from 'components/CustomButtons/Button.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import { container } from 'assets/jss/material-kit-react.jsx';

import image from 'assets/img/screen-shot-app-top.png';
import stackCardGif from 'assets/img/stack_cards.gif';
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.jsx';
import sortCardsGif from 'assets/img/sort_cards.gif';
import unfurlingLinksPng from 'assets/img/unfurling_links.png';

import InfoArea from 'components/InfoArea/InfoArea.jsx';

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
    position: 'relative'
    /*padding: '100px 30px 30px'*/
  },
  bg: {
    background: '#FFFFFF',
    height: '100vh'
  },
  section: {
    padding: '20px 0'
    /*textAlign: 'center'*/
  },
  description: {
    color: '#999'
  }
};

class IndexPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    var OSName = 'Unknown';
    if (navigator.appVersion.indexOf('Win') != -1) OSName = 'Windows';
    if (navigator.appVersion.indexOf('Mac') != -1) OSName = 'MacOS';
    if (navigator.appVersion.indexOf('X11') != -1) OSName = 'UNIX';
    if (navigator.appVersion.indexOf('Linux') != -1) OSName = 'Linux';

    var downloadButton = '';
    if (OSName != 'Unknown') {
      var downloadButtonLabel = '';
      var downloadButtonHref = '';
      var downloadButtonIcon = '';
      if (OSName === 'MacOS') {
        downloadButtonLabel = 'Download FOR MAC';
        downloadButtonHref =
          'https://firebasestorage.googleapis.com/v0/b/stacknote-production.appspot.com/o/downloads%2Fmac_releases%2FStacknote-1.0.0.dmg?alt=media&token=3067a7da-8494-42b0-8f0e-43990eecd077';
        downloadButtonIcon = <i className="fab fa-apple" />;
      } else if (OSName === 'Windows') {
        downloadButtonLabel = 'Download FOR WINDOWS';
        downloadButtonHref =
          'https://firebasestorage.googleapis.com/v0/b/stacknote-production.appspot.com/o/downloads%2Fwindows_releases%2FStacknote-Setup-1.0.0.exe?alt=media&token=e89335c2-d9da-42b2-99af-0f7221ccf0d5';
        downloadButtonIcon = <i className="fab fa-windows" />;
      }

      var downloadButton = (
        <Button
          color="danger"
          size="lg"
          href={downloadButtonHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {downloadButtonIcon}
          {downloadButtonLabel}
        </Button>
      );
    }

    return (
      <div className={classes.bg}>
        <Header
          color="transparent"
          brand="Stacknote"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
        />
        <Parallax image={require('assets/img/colorful-colourful-paper.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem sm={12} md={6}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Stacknote</h1>
                  <h3 className={classes.subtitle}>
                    Stacknote is an application that can create long sentences
                    by stacking short sentences like a chat application. It
                    makes your writing surprisingly efficient.
                  </h3>
                </div>
                <GridContainer>
                  <GridItem sm={12} md={6}>
                    {downloadButton}
                  </GridItem>
                  <GridItem sm={12} md={6}>
                    <Button
                      color="info"
                      size="lg"
                      href="https://stacknote.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ACCESS STACKNOTE IN BROWSER
                    </Button>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <img src={image} alt="..." />
            <div className={classes.section}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h2 className={classes.sectionTitle}>Stack Cards</h2>
                  <h5 className={classes.description}>
                    In Stacknote, you can stack blocks and build a document.
                    That's just like a chat app's UI. That's blocks are called
                    card. This idea is came from author's habit of taking notes
                    in chat app and github issues's comment area.
                  </h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <img src={stackCardGif} className={classes.imgRaised} />
                </GridItem>
              </GridContainer>
            </div>
            <div className={classes.section}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h2 className={classes.sectionTitle}>Sorting</h2>
                  <h5 className={classes.description}>
                    Cards in a note are Sortable.
                  </h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <img src={sortCardsGif} className={classes.imgRaised} />
                </GridItem>
              </GridContainer>
            </div>

            <div className={classes.section}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h2 className={classes.sectionTitle}>Unfurling Links</h2>
                  <h5 className={classes.description}>
                    Like Slack, Twitter, Facebook etc, when you create a card
                    containing links, simple previews are added. (There are some
                    urls stacknote couldn't get site information)
                  </h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <img src={unfurlingLinksPng} className={classes.imgRaised} />
                </GridItem>
              </GridContainer>
            </div>
          </div>

          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h2 className={classes.title}>Features</h2>
                  <h5 className={classes.description}>
                    This is the paragraph where you can write more details about
                    your product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is
                    curious, otherwise he wouldn't scroll to get here. Add a
                    button if you want the user to see more.
                  </h5>
                </GridItem>
              </GridContainer>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Markdown"
                      description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                      icon={Chat}
                      iconColor="info"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Sortable"
                      description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                      icon={VerifiedUser}
                      iconColor="success"
                      vertical
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                      title="Unfurling Links"
                      description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                      icon={Fingerprint}
                      iconColor="danger"
                      vertical
                    />
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(indexPageStyle)(IndexPage);
