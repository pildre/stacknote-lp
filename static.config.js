import React from 'react';
import axios from 'axios';
import { createGenerateClassName } from '@material-ui/core/styles';
const generateClassName = createGenerateClassName();
export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="images/favicon.png" />
        <title>Stacknote</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [
    [
      'react-static-plugin-jss',
      {
        providerProps: {
          generateClassName
        }
      }
    ],
    ['react-static-plugin-sass']
  ],
  getSiteData: () => ({
    title: 'React Static'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return [
      {
        path: '/blog',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post
          })
        }))
      }
    ];
  }
};
