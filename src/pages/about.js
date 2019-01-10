import React from 'react';
import { Link } from '@reach/router';
import Button from 'components/CustomButtons/Button.jsx';

export default () => (
  <div>
    <p>React Static is a progressive static site generator for React.</p>
    <Link to="/">
      <Button color="primary">GO TOP</Button>
    </Link>
  </div>
);
