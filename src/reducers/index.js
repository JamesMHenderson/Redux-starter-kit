import { combineReducers } from 'redux-starter-kit';
import beer from '../features/beer/beerSlice';
import brewery from '../features/brewery/brewerySlice';
import filter from '../features/filter/filterSlice';
import search from '../features/search/searchSlice';

export default combineReducers({
  beer,
  brewery,
  filter,
  search,
});
