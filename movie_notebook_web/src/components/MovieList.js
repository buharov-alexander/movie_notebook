import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const MovieList = () => (
  <List>
    <ListItem button>
      <ListItemText primary="Test" />
    </ListItem>
  </List>
);

export default MovieList;
