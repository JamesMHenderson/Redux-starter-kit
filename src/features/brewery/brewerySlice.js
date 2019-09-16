import { createSlice, createSelector } from 'redux-starter-kit';
import { selectBreweryFilter } from '../filter/filterSlice';
import { selectBrewerySearchTerm } from '../search/searchSlice';

const brewerySlice = createSlice({
  slice: 'brewery',
  initialState: {},
  reducers: {
    add: (state, action) => {
      const { name } = action.payload;
      state[name] = action.payload;
    },
    setAll: (state, action) => action.payload.brewery,
  },
});

export const selectBreweryState = (state) => state.brewery;

export const selectBreweries = createSelector(
  [selectBreweryState],
  (breweries) => Object.values(breweries),
);

export const selectBreweryBeers = createSelector(
  [selectBreweryFilter, selectBreweryState],
  (filter, breweries) => {
    if (breweries[filter]) {
      return breweries[filter].beer;
    }

    return undefined;
  },
);

export const selectFilteredBreweries = createSelector(
  [selectBrewerySearchTerm, selectBreweries],
  (search, breweries) => breweries
    .filter((b) => b.name.toLowerCase().includes(search))
    .map((b) => b.id),
);

export const selectBrewery = (state, id) => selectBreweryState(state)[id];

export const { actions } = brewerySlice;

export default brewerySlice.reducer;
