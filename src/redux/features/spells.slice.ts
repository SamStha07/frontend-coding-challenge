import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/axios';
import { ISpell, SpillsList } from 'types';

export const fetchAllSpells = createAsyncThunk('spells/all-list', async () => {
  const response = await axiosInstance('/spells');

  return response.data;
});

export interface SpillInterface {
  loading: boolean;
  data: SpillsList;
  isError: boolean;
  error: string | null;
}

const initialState: SpillInterface = {
  loading: false,
  data: { count: null, results: null },
  isError: false,
  error: null,
};

export const spellSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllSpells.pending, (state) => {
      state.loading = true;
      state.isError = false;
    });
    builder.addCase(fetchAllSpells.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(fetchAllSpells.rejected, (state, action) => {
      state.loading = false;
      state.data = { count: null, results: null };
      state.isError = true;
      state.error = action?.error?.message as string;
    });
  },
});

export default spellSlice.reducer;
