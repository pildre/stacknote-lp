import React from 'react';
import axios from 'axios';
import fs from 'fs';
export default {
  siteRoot: 'https://stacknote-lp.netlify.com',
  stagingSiteRoot: 'http://localhost:3000',
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
          rel="stylesheet"
        />
        <title>Stacknote</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [['react-static-plugin-sass']],
  getSiteData: () => ({
    title: 'Stacknote'
  }),
  getRoutes: async () => {
    var markdownTerm = fs.readFileSync('src/lib/terms.md', 'utf-8');
    var markdownPrivacy = fs.readFileSync('src/lib/privacy.md', 'utf-8');
    return [
      {
        path: '/terms',
        getData: () => ({
          markdownText: markdownTerm
        })
      },
      {
        path: '/privacy',
        getData: () => ({
          markdownText: markdownPrivacy
        })
      }
    ];
    // const { data: posts } = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // );
    // return [
    //   {
    //     path: '/blog',
    //     getData: () => ({
    //       posts
    //     }),
    //     children: posts.map(post => ({
    //       path: `/post/${post.id}`,
    //       component: 'src/containers/Post',
    //       getData: () => ({
    //         post
    //       })
    //     }))
    //   }
    // ];
  }
};
