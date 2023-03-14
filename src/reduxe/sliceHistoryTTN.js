import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';
import { createSlice } from '@reduxjs/toolkit';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const sliceHistoryTTN = createSlice({
  name: 'historyTTN',
  initialState: { history: [] },
  reducers: {
    addTTN(state, action) {
      if (!state.history.includes(action.payload))
        state.history = [action.payload, ...state.history];
    },

    clearHistory(state) {
      state.history = [];
    },
  },
});

const persistConfig = {
  key: 'historyTTN',
  storage,
  stateReconciler: hardSet,
};

export const { addTTN, clearHistory } = sliceHistoryTTN.actions;

export const historyTTNReducer = persistReducer(
  persistConfig,
  sliceHistoryTTN.reducer
);
