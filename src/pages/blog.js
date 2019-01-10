import React from 'react';
import { RouteData } from 'react-static';
import { Link } from '@reach/router';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';

import blogPageStyle from 'assets/jss/material-kit-react/views/blogPage.jsx';

class BlogPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <RouteData>
        {({ posts }) => (
          <div>
            <Header
              color="white"
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              fixed
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <GridContainer spacing={16}>
                  <GridItem xs={12}>
                    <h1>It's blog time.</h1>
                    <br />
                    All Posts:
                    <ul>
                      {posts.map(post => (
                        <li key={post.id}>
                          <Link to={`/blog/post/${post.id}/`}>
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        )}
      </RouteData>
    );
  }
}

export default withStyles(blogPageStyle)(BlogPage);
