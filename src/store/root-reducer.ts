import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../constants';
import { offersSlice } from './offers-slice/offers-slice';
import { commentsSlice } from './comments-slice/comments-slice';
import { favoriteSlice } from './favorite-slice/favorite-slice';
import { userSlice } from './user-slice/user-slice';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
  [NameSpace.Favorite]: favoriteSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
