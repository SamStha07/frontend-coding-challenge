import { createSlice } from '@reduxjs/toolkit';
import { ISpell } from 'types';

interface FavoriteListInterface {
  data: ISpell[] | [];
}

const initialState: FavoriteListInterface = {
  data: [],
};

export const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const list: ISpell[] = [...state.data, action.payload];

      localStorage.setItem('spells-favorite', JSON.stringify(list));

      state.data = [...state.data, action.payload];
    },
    getAllFavorite: (state) => {
      const getAll: ISpell[] = JSON.parse(localStorage.getItem('spells-favorite') as string) ?? [];
      state.data = getAll!.length > 0 ? getAll : [];
    },
  },
});

export const { addFavorite, getAllFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
