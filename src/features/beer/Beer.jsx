import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './beer.module.css';
import { selectBrewery } from '../brewery/brewerySlice';

const propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    brewery: PropTypes.number.isRequired,
    style: PropTypes.string.isRequired,
    abv: PropTypes.number.isRequired,
    notes: PropTypes.string.isRequired,
    bar: PropTypes.string.isRequired,
  }).isRequired,
  brewery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

const Beer = ({ beer, brewery }) => {
  const [displayDetails, toggleDetails] = React.useState(false);

  const openUntappd = () => {
    const params = encodeURI(`${brewery.name} ${beer.name}`);
    window.open(`https://untappd.com/search?q=${params}`);
  };

  return (
    <>
      <tr>
        <td>
          <button type="button" onClick={() => toggleDetails(!displayDetails)}>
            {beer.name}
          </button>
        </td>
        <td>{brewery.name}</td>
        <td>{beer.style}</td>
        <td>{beer.abv}</td>
        <td>{beer.bar}</td>
      </tr>
      {
            displayDetails
            && (
            <tr className={style.details}>
              <td colSpan={5}>
                {
                  beer.notes === '' ? 'No tasting notes available' : beer.notes
                }
                <br />
                {brewery.location}
                <br />
                <button type="button" onClick={openUntappd}>Find on Untappd</button>
              </td>
            </tr>
            )
        }
    </>
  );
};

Beer.propTypes = propTypes;

const mapStateToProps = (state, { beer }) => ({
  brewery: selectBrewery(state, beer.brewery),
});

export default connect(mapStateToProps)(Beer);
