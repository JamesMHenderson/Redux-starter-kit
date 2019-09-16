import { normalize, schema } from 'normalizr';
import { actions } from '../brewery/brewerySlice';
import data from './beer.json';

const beerSchema = new schema.Entity('beer');
const brewerySchema = new schema.Entity('brewery', { beer: [beerSchema] });

const getBeerData = () => (dispatch) => {
  const normalisedData = normalize(data, [brewerySchema]);

  dispatch(actions.setAll(normalisedData.entities));
};

export default {
  getBeerData,
};
