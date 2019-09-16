import { createSlice, createSelector } from 'redux-starter-kit';
import { selectBreweryBeers, selectFilteredBreweries, actions as breweryActions } from '../brewery/brewerySlice';
import { selectAbvRange, selectStyleFilter, selectBarFilter } from '../filter/filterSlice';
import { selectBeerSearchTerm } from '../search/searchSlice';

const beerSlice = createSlice({
  slice: 'beer',
  initialState: {},
  reducers: {},
  extraReducers: {
    [breweryActions.setAll]: (state, action) => action.payload.beer,
  },
});

const selectBeerState = (state) => state.beer;

export const selectBeers = createSelector(
  [selectBeerState],
  (state) => Object.values(state),
);

const selectFilterBrewery = createSelector(
  [selectBreweryBeers, selectBeerState],
  (breweryBeers, beers) => (breweryBeers ? breweryBeers.map((beer) => beers[beer]) : Object.values(beers)),
);

export const filteredBeers = createSelector(
  [
    selectFilterBrewery,
    selectStyleFilter,
    selectAbvRange,
    selectBarFilter,
    selectBeerSearchTerm,
    selectFilteredBreweries,
  ],
  (beers, styles, range, bars, beerSearch, breweries) => {
    const filterStyle = styles.length > 0;
    const filterBar = bars.length > 0;

    return beers.filter((beer) => (
      (!filterStyle || styles.includes(beer.style))
          && (!filterBar || bars.includes(beer.bar))
          && breweries.includes(beer.brewery)
          && beer.abv >= range[0]
          && beer.abv <= range[1]
          && beer.name.toLowerCase().includes(beerSearch)
    ));
  },
);

export const selectBeer = (state, id) => selectBeerState(state)[id];

export const { actions } = beerSlice;

export default beerSlice.reducer;
