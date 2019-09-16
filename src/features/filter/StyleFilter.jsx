import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectStyleFilter } from './filterSlice';

const propTypes = {
  filterStyle: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const styles = [
  'Pale',
  'Amber',
  'Dark',
  'Fruit',
  'Sour',
  'Wheat',
  'Saison',
];

const StyleFilter = ({ filterStyle, filter }) => {
  const styleOptions = styles.map((x) => <option key={`style-${x}`} value={x}>{x}</option>);

  const handleChange = (e) => {
    const selected = [...e.target.options].filter((x) => x.selected).map((x) => x.value);
    filterStyle(selected);
  };

  return (
    <tr>
      <th>Select Style</th>
      <td>
        <select id="selectStyle" value={filter} multiple onChange={handleChange}>
          {styleOptions}
        </select>
      </td>
    </tr>
  );
};

StyleFilter.propTypes = propTypes;

const mapStateToProps = (state) => ({
  filter: selectStyleFilter(state),
});

const mapDispatchToProps = {
  filterStyle: actions.styles,
};

export default connect(mapStateToProps, mapDispatchToProps)(StyleFilter);
