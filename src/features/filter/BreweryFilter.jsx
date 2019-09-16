import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectBreweries } from '../brewery/brewerySlice';
import { actions, selectBreweryFilter } from './filterSlice';

const propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  filterBrewery: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const BreweryFilter = ({ breweries, filterBrewery, filter }) => {
  const breweryOptions = breweries.map((x) => <option key={`brewery-${x.id}`} value={x.id}>{x.name}</option>);

  return (
    <tr>
      <th>Select Brewery</th>
      <td>
        <select id="breweryFilter" value={filter} onChange={(e) => filterBrewery(e.target.value)}>
          <option value="">-- Select Brewery --</option>
          {breweryOptions}
        </select>
      </td>
    </tr>
  );
};

BreweryFilter.propTypes = propTypes;

const mapStateToProps = (state) => ({
  breweries: selectBreweries(state),
  filter: selectBreweryFilter(state),
});

const mapDispatchToProps = {
  filterBrewery: actions.brewery,
};

export default connect(mapStateToProps, mapDispatchToProps)(BreweryFilter);
