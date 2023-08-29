import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { FavoriteSlice } from '../../types/state';
import { fetchFavoritesAction } from '../api-actions';

const initialState: FavoriteSlice = {
  favorites: [],
  isDataLoading: false,
};

export const favoriteSlice = createSlice({
  name: NameSpace.Favorite,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isDataLoading = false;
      });
  }
});
