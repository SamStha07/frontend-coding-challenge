import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from 'redux/axios';

export const fetchSingleDetailSpell = createAsyncThunk(
  'spells/fetch-single-spell-details',
  async (slug: string) => {
    const response = await axiosInstance(`/spells/${slug}`);

    return response.data;
  },
);

interface SingleSpillsDetails {
  index: string;
  name: string;
  desc: string;
  higher_level: string;
  duration: string;
  level: number;
  attack_type: string;
  range: string;
}

export interface SpillDetailsInterface {
  loading: boolean;
  data: SingleSpillsDetails | null;
  isError: boolean;
  error: string | null;
}

const initialState: SpillDetailsInterface = {
  loading: false,
  data: null,
  isError: false,
  error: null,
};

export const spellDetailsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleDetailSpell.pending, (state) => {
      state.loading = true;
      state.isError = false;
    });
    builder.addCase(fetchSingleDetailSpell.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
      state.error = null;
    });
    builder.addCase(fetchSingleDetailSpell.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.isError = true;
      state.error = action?.error?.message as string;
    });
  },
});

export default spellDetailsSlice.reducer;
