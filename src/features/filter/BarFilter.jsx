import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectBarFilter } from './filterSlice';

const propTypes = {
  filterBar: PropTypes.func.isRequired,
  filterValue: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const bars = [
  'keykeg',
  'main',
  'brewery',
  'foreign',
];

const BarFilter = ({ filterBar, filterValue }) => {
  const barOptions = bars.map((x) => <option key={`bar-${x}`} value={x}>{x}</option>);

  const handleChange = (e) => {
    const selected = [...e.target.options].filter((x) => x.selected).map((x) => x.value);
    filterBar(selected);
  };

  return (
    <tr>
      <th>Select Bar</th>
      <td>
        <select id="filterBar" value={filterValue} multiple onChange={handleChange}>
          {barOptions}
        </select>
      </td>
    </tr>
  );
};

BarFilter.propTypes = propTypes;

const mapStateToProps = (state) => ({
  filterValue: selectBarFilter(state),
});

const mapDispatchToProps = {
  filterBar: actions.bar,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarFilter);
