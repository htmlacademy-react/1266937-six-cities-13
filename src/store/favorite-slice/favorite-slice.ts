import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants';
import { FavoriteSlice } from '../../types/state';
import { fetchFavoritesAction, changeFavoriteStatusAction } from '../api-actions';

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
        state.isDataLoading = false;
        state.favorites = action.payload;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});
