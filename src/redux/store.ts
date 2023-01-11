import { configureStore } from '@reduxjs/toolkit';
import spellReducer from './features/spells.slice';
import spellDetailReducer from './features/spell-details.slice';
import favoriteReducer from './features/favourite.slice';

export const store = configureStore({
  reducer: {
    spells: spellReducer,
    spellDetails: spellDetailReducer,
    favorites: favoriteReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
