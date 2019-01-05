import axios from 'axios';
// static.config.js
import { createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();
export default {
  plugins: [
    [
      'react-static-plugin-jss',
      {
        providerProps: {
          generateClassName
        }
      }
    ]
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
