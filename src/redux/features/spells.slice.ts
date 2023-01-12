import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { axiosInstance } from 'redux/axios';
import { Error, ISpell, SpillsList } from 'types';

export const fetchAllSpells = createAsyncThunk(
  'spells/all-list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance('/spells');
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      if (!err.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(err.response.data);
    }
  },
);

export interface SpillInterface {
  loading: boolean;
  data: SpillsList;
  isError: boolean;
  error: Error | null;
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
      state.error = action.payload as Error;
    });
  },
});

export default spellSlice.reducer;
