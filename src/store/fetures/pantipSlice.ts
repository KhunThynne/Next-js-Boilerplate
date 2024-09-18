// features/pantip/pantipSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type PantipState = {
  data: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: PantipState = {
  data: [],
  status: 'idle',
};

export const fetchPantipData = createAsyncThunk('pantip/fetchPantipData', async () => {
  const response = await fetch(process.env.NEXT_PANTHIP_API_URL!);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

const pantipSlice = createSlice({
  name: 'pantip',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPantipData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPantipData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPantipData.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default pantipSlice.reducer;
