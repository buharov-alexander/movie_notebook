import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Media from 'react-media';

import Grid from '@material-ui/core/Grid';

const MasterDetails = (props) => {
  const { path } = useRouteMatch();

  return (
    <Media queries={{ small: '(max-width: 599px)' }}>
      {(matches) => (matches.small
        ? <SmallMasterDetails {...props} path={path} />
        : <LargeMasterDetails {...props} path={path} />)}
    </Media>
  );
};

const SmallMasterDetails = ({
  path,
  MasterType,
  masterProps,
  DetailsType,
  detailsProps,
}) => (
  <Switch>
    <Route exact path={path}>
      <MasterType {...masterProps} />
    </Route>
    <Route path={`${path}/details/:id`}>
      <DetailsType {...detailsProps} />
    </Route>
  </Switch>
);

SmallMasterDetails.propTypes = {
  path: PropTypes.string.isRequired,
  MasterType: PropTypes.elementType.isRequired,
  masterProps: PropTypes.object.isRequired,
  DetailsType: PropTypes.elementType.isRequired,
  detailsProps: PropTypes.object.isRequired,
};

const LargeMasterDetails = ({
  path,
  MasterType,
  masterProps,
  DetailsType,
  detailsProps,
}) => (
  <Grid container>
    <Grid item xs={4}>
      <Route path={path}>
        <MasterType {...masterProps} />
      </Route>
    </Grid>
    <Grid item xs={8}>
      <Switch>
        <Route exact path={path}>
          <DetailsType {...detailsProps} />
        </Route>
        <Route path={`${path}/details/:id`}>
          <DetailsType {...detailsProps} />
        </Route>
      </Switch>
    </Grid>
  </Grid>
);

LargeMasterDetails.propTypes = {
  path: PropTypes.string.isRequired,
  MasterType: PropTypes.elementType.isRequired,
  masterProps: PropTypes.object.isRequired,
  DetailsType: PropTypes.elementType.isRequired,
  detailsProps: PropTypes.object.isRequired,
};

export default MasterDetails;
