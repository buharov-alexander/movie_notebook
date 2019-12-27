import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const MasterDetails = ({
  MasterType,
  masterProps,
  DetailsType,
  detailsProps,
}) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}`}>
        <MasterType {...masterProps} />
      </Route>
      <Route path={`${path}/details/:id`}>
        <DetailsType {...detailsProps} />
      </Route>
    </Switch>
  );
};

MasterDetails.propTypes = {
  MasterType: PropTypes.elementType.isRequired,
  masterProps: PropTypes.object.isRequired,
  DetailsType: PropTypes.elementType.isRequired,
  detailsProps: PropTypes.object.isRequired,
};

export default MasterDetails;
