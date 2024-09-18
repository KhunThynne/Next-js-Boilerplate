// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

// import reducers
import exampleReducer from './exampleSlice';
import pantipReducer from './fetures/pantipSlice';

const rootReducer = combineReducers({
  pantip: pantipReducer,
  example: exampleReducer,
});

export default rootReducer;
