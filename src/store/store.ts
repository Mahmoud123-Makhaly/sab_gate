import { create } from 'zustand';

import { layoutSlice } from './layout';
import { appAccountSlice } from './app-user';
import { StoreStates } from './state';

export const boundStore = create<StoreStates>()((...a) => ({
  ...layoutSlice(...a),
  ...appAccountSlice(...a),
}));
