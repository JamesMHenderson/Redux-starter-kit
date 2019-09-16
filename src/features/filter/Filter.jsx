import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectBrewery } from '../brewery/brewerySlice';
import { actions } from './filterSlice';
import { actions as searchActions } from '../search/searchSlice';
import BreweryFilter from './BreweryFilter';
import StyleFilter from './StyleFilter';
import AbvFilter from './AbvFilter';
import BarFilter from './BarFilter';
import Search from '../search/Search';
import styles from './filter.module.css';

const propTypes = {
  reset: PropTypes.func.isRequired,
};

const Filter = ({ reset }) => {
  const [displayFilters, toggleFilters] = React.useState(false);
  const [displaySearch, toggleSearch] = React.useState(false);

  return (
    <section className={styles.section}>
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          toggleFilters(!displayFilters);
        }}
      >
            Filters
      </button>
      {displayFilters
        && (
        <table className={styles.filter}>
          <tbody>
            <BreweryFilter />
            <StyleFilter />
            <AbvFilter />
            <BarFilter />
          </tbody>
        </table>
        )}
      <button
        className={styles.button}
        type="button"
        onClick={() => {
          toggleSearch(!displaySearch);
        }}
      >
            Search
      </button>

      {
            displaySearch
            && <Search />
        }
      <button
        className={styles.button}
        type="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </section>
  );
};

Filter.propTypes = propTypes;

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  filterBrewery: actions.brewery,
  reset: searchActions.reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
