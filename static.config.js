import React from 'react';
import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
export default {
  siteRoot: 'https://lp.stacknote.io',
  stagingSiteRoot: 'http://localhost:3000',
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="utf-8" />
        <title>Stacknote</title>
        <meta
          name="description"
          content="Stacknote is an application that can create long sentences by stacking short sentences like a chat application. It makes your writing surprisingly efficient."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Keita Ono" />
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
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Stacknote" />
        <meta property="og:url" content="https://lp.stacknote.io/" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="product:price:amount" content="4.99" />
        <meta property="product:price:currency" content="USD" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  plugins: [['react-static-plugin-sass']],
  getSiteData: () => ({
    title: 'Stacknote'
  }),
  getRoutes: async () => {
    const markdownTerm = fs.readFileSync('src/lib/terms.md', 'utf-8');
    const markdownPrivacy = fs.readFileSync('src/lib/privacy.md', 'utf-8');
    const markdownNotation = fs.readFileSync('src/lib/notation.md', 'utf-8');
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
      },
      {
        path: '/notation',
        getData: () => ({
          markdownText: markdownNotation
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
