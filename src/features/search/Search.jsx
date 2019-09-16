import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectBeerSearchTerm, selectBrewerySearchTerm } from './searchSlice';
import styles from './search.module.css';

const propTypes = {
  setBeerTerm: PropTypes.func.isRequired,
  beerSearchTerm: PropTypes.string.isRequired,
  brewerySearchTerm: PropTypes.string.isRequired,
  setBreweryTerm: PropTypes.func.isRequired,
};

const Search = ({
  beerSearchTerm, setBeerTerm, brewerySearchTerm, setBreweryTerm,
}) => (
  <table className={styles.search}>
    <tbody>
      <tr>
        <th>By Beer Name</th>
        <td>
          <input id="beerSearchTerm" value={beerSearchTerm} type="text" onChange={(e) => setBeerTerm(e.target.value)} />
        </td>
      </tr>
      <tr>
        <th>By Brewery Name</th>
        <td>
          <input id="brewerySearchTerm" value={brewerySearchTerm} type="text" onChange={(e) => setBreweryTerm(e.target.value)} />
        </td>
      </tr>
    </tbody>
  </table>
);

Search.propTypes = propTypes;

const mapStateToProps = (state) => ({
  beerSearchTerm: selectBeerSearchTerm(state),
  brewerySearchTerm: selectBrewerySearchTerm(state),
});

const mapDispatchToProps = {
  setBeerTerm: actions.beer,
  setBreweryTerm: actions.brewery,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
