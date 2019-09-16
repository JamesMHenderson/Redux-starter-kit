import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './beer.module.css';
import { filteredBeers } from './beerSlice';
import Beer from './Beer';

const propTypes = {
  beers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

const FilteredBeerList = ({ beers }) => {
  const header = (
    <tr>
      <th className={style.beer}>Name</th>
      <th className={style.brewery}>Brewery</th>
      <th className={style.style}>Style</th>
      <th className={style.abv}>%</th>
      <th className={style.bar}>Bar</th>
    </tr>
  );

  const beerList = beers.map((beer) => (
    <Beer key={`beer-${beer.id}`} beer={beer} />
  ));

  return (
    <>
      <table className={style.table}>
        <tbody>
          {header}
          {beerList}
        </tbody>
      </table>
    </>
  );
};

FilteredBeerList.propTypes = propTypes;

const mapStateToProps = (state) => ({
  beers: filteredBeers(state),
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(FilteredBeerList);
