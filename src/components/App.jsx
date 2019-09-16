import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import operations from '../features/data/operations';
import Filter from '../features/filter/Filter';
import FilteredBeerList from '../features/beer/FilteredBeerList';

const propTypes = {
  getData: PropTypes.func.isRequired,
};

const App = ({ getData }) => {
  React.useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <Filter />
      <FilteredBeerList />
      <div>
        {'Data is from '}
        <a href="https://yorkbeerfestival.camra.org.uk/">York Beer Festival</a>
      </div>
    </div>
  );
};

App.propTypes = propTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getData: operations.getBeerData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
