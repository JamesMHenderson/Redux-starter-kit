import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectAbvRange } from './filterSlice';

const propTypes = {
  setMin: PropTypes.func.isRequired,
  setMax: PropTypes.func.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const AbvFilter = ({ setMin, setMax, range }) => (
  <>
    <tr>
      <th>ABV Min</th>
      <td>
        <input id="minAbvFilter" type="number" step={0.2} value={range[0]} max={range[1]} min={2.2} onChange={(e) => setMin(Number(e.target.value))} />
      </td>
    </tr>
    <tr>
      <th>ABV Max</th>
      <td>
        <input id="maxAbvFilter" type="number" step={0.2} value={range[1]} max={14} min={range[0]} onChange={(e) => setMax(Number(e.target.value))} />
      </td>
    </tr>
  </>
);

AbvFilter.propTypes = propTypes;

const mapStateToProps = (state) => ({
  range: selectAbvRange(state),
});

const mapDispatchToProps = {
  setMin: actions.abv.setMin,
  setMax: actions.abv.setMax,
};

export default connect(mapStateToProps, mapDispatchToProps)(AbvFilter);
