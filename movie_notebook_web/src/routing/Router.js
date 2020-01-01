import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Pages from 'pages/pagesContainer';

const Router = () => (
  <BrowserRouter basename="/mnb/webui">
    <Pages />
  </BrowserRouter>
);

export default Router;
