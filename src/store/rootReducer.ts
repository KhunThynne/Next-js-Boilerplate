// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';

import { pantipSlice, sidebarSlice } from './fetures';

const rootReducer = combineReducers({
  pantip: pantipSlice.reducer,
  sidebarmenu: sidebarSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
