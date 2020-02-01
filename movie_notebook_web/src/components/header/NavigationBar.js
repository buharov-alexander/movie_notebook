import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ListIcon from '@material-ui/icons/List';
import {
  MOVIES_PAGE, SEARCH_PAGE,
} from 'constants/pageTypes';

const styles = {
  grow: {
    flexGrow: 1,
  },
};

const NavigationBar = ({ classes, activePage, selectPage }) => {
  const isMoviePage = activePage.startsWith(MOVIES_PAGE);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Movie Notebook
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => selectPage(isMoviePage ? SEARCH_PAGE : MOVIES_PAGE)}
          >
            {isMoviePage ? <SearchIcon /> : <ListIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  selectPage: PropTypes.func.isRequired,
};

export default withStyles(styles)(NavigationBar);
