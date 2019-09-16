import { createSlice, createSelector, combineReducers } from 'redux-starter-kit';
import { actions as searchActions } from '../search/searchSlice';

const breweryFilterSlice = createSlice({
  slice: 'breweryFilter',
  initialState: '',
  reducers: {
    set: (state, action) => action.payload,
  },
  extraReducers: {
    [searchActions.reset]: () => '',
  },
});

const styleFilterSlice = createSlice({
  slice: 'styleFilter',
  initialState: [],
  reducers: {
    set: (state, action) => action.payload,
  },
  extraReducers: {
    [searchActions.reset]: () => [],
  },
});

const abvInitialState = {
  min: 2.2,
  max: 14,
};

const abvFilterSlice = createSlice(({
  slice: 'abvFilter',
  initialState: abvInitialState,
  reducers: {
    setMin: (state, action) => {
      state.min = action.payload;
    },
    setMax: (state, action) => {
      state.max = action.payload;
    },
  },
  extraReducers: {
    [searchActions.reset]: () => abvInitialState,
  },
}));

const barFilterSlice = createSlice(({
  slice: 'barFilter',
  initialState: [],
  reducers: {
    set: (state, action) => action.payload,
  },
  extraReducers: {
    [searchActions.reset]: () => [],
  },
}));

const reducers = combineReducers({
  brewery: breweryFilterSlice.reducer,
  styles: styleFilterSlice.reducer,
  abv: abvFilterSlice.reducer,
  bar: barFilterSlice.reducer,
});

export const selectFilter = (state) => state.filter;

export const selectBreweryFilter = createSelector(
  [selectFilter],
  (filter) => filter.brewery,
);

export const selectStyleFilter = createSelector(
  [selectFilter],
  (filter) => filter.styles,
);

export const selectAbvRange = createSelector(
  [selectFilter],
  (filter) => [filter.abv.min, filter.abv.max],
);

export const selectBarFilter = createSelector(
  [selectFilter],
  (filter) => filter.bar,
);

export const actions = {
  brewery: breweryFilterSlice.actions.set,
  styles: styleFilterSlice.actions.set,
  abv: abvFilterSlice.actions,
  bar: barFilterSlice.actions.set,
};

export default reducers;
