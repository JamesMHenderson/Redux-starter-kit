import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import rootReducer from './reducers';

// getDefaultMiddleware includes [thunk, immutableStateInvariant, serializableStateInvariant]

const store = configureStore({
  middleware: [...getDefaultMiddleware()],
  reducer: rootReducer,
});

export default store;
