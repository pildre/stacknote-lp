/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';
import Button from 'components/CustomButtons/Button.jsx';

import Constants from 'lib/Constants';
import Logger from 'lib/Logger';

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Button
                href="/terms"
                onClick={() => Logger.track('Button', 'Terms')}
                color="transparent"
                className={classes.block}
              >
                Terms of Use
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button
                href="/privacy"
                onClick={() => Logger.track('Button', 'Privacy')}
                color="transparent"
                className={classes.block}
              >
                Privacy Policy
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button
                href="https://twitter.com/stacknote_app"
                onClick={() => Logger.track('Button', 'Contact Twitter-En')}
                color="transparent"
                className={classes.block}
              >
                <i className={classes.socialIcons + ' fab fa-twitter'} />
                Twitter
              </Button>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}&nbsp;
          <a
            href={Constants.contact.twitterEn}
            onClick={() => {
              Logger.track('Button', 'Contact Twitter-En');
              Logger.track('Button', 'Footer author link');
            }}
            className={aClasses}
            target="_blank"
          >
            Keita Ono
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
