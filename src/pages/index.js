import React from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import CodeIcon from '@material-ui/icons/Code';
import CloudUpload from '@material-ui/icons/CloudUpload';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';

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
          'https://firebasestorage.googleapis.com/v0/b/stacknote-production.appspot.com/o/downloads%2Fmac_releases%2FStacknote-0.5.0.dmg?alt=media&token=8c560c06-84b4-4f65-b35b-048ff46d3701';
        downloadButtonIcon = <i className="fab fa-apple" />;
      } else if (OSName === 'Windows') {
        downloadButtonLabel = 'Download FOR WINDOWS';
        downloadButtonHref =
          'https://firebasestorage.googleapis.com/v0/b/stacknote-production.appspot.com/o/downloads%2Fwindows_releases%2FStacknote-Setup-0.5.0.exe?alt=media&token=c9e32d6e-ca56-4790-b531-4bd67dd7c0a9';
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

            <div className={classes.sectionCentered}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h3 className={classes.title}>Other Features</h3>
                  {/*
                  <h5 className={classes.description}>
                    This is the paragraph where you can write more details about
                    your product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is
                    curious, otherwise he wouldn't scroll to get here. Add a
                    button if you want the user to see more.
                  </h5>*/}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Markdown"
                    description="In cards, you can write in GitHub-flavored Markdown with inline code syntax highlightings."
                    icon={Chat}
                    iconColor="info"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Syntax Highlighting"
                    description="In a markdown code block, automatically language is detected and code is highlighted."
                    icon={CodeIcon}
                    iconColor="danger"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Cloud Upload"
                    description="Only for a paid user, all notes are stored at the cloud. So you can get these on multiple devices."
                    icon={CloudUpload}
                    iconColor="success"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>

            <div className={classes.sectionCentered}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h3 className={classes.title}>Plan</h3>
                  {/*
                  <h5 className={classes.description}>
                    This is the paragraph where you can write more details about
                    your product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is
                    curious, otherwise he wouldn't scroll to get here. Add a
                    button if you want the user to see more.
                  </h5>*/}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="info">
                      <h4 className={classes.planCardTitle}>Free Plan</h4>
                    </CardHeader>
                    <CardBody>
                      <List component="nav">
                        <ListItem>
                          <ListItemText primary="Unlimited Notes" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Free" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="No credit card information required" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Local Storage" />
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Card>
                    <CardHeader color="warning">
                      <h4 className={classes.planCardTitle}>Premium Plan</h4>
                    </CardHeader>
                    <CardBody>
                      <List component="nav">
                        <ListItem>
                          <ListItemText primary="Unlimited Notes" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="4.99$ (USD) / mo." />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="60 Days Free Trial" />
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Cloud Storage (FireStore)" />
                        </ListItem>
                      </List>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(indexPageStyle)(IndexPage);
