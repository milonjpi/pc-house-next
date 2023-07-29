import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    motherboard: null,
    processor: null,
    ram: null,
    powerSupply: null,
    storage: null,
    monitor: null,
  },
};

const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    setBuilder: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setBuilder } = builderSlice.actions;

export default builderSlice.reducer;
