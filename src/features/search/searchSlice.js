import { createSlice } from 'redux-starter-kit';

const initialState = {
  beer: '',
  brewery: '',
};

const searchSlice = createSlice(
  {
    slice: 'search',
    initialState,
    reducers: {
      beer: (state, action) => {
        state.beer = action.payload.toLowerCase();
      },
      brewery: (state, action) => {
        state.brewery = action.payload.toLowerCase();
      },
      reset: () => initialState,
    },
  },
);

export const { actions } = searchSlice;

const selectSearch = (state) => state.search;

export const selectBeerSearchTerm = (state) => selectSearch(state).beer;
export const selectBrewerySearchTerm = (state) => selectSearch(state).brewery;

export default searchSlice.reducer;
