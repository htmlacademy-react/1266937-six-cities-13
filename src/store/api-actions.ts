import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../types/state.js';
import type { Review, Reviews } from '../types/review.js';
import type { Offers, Offer, ExtendedOffer } from '../types/offer';
import type { AuthData } from '../types/auth-data';
import type { UserData } from '../types/user-data';
import type { CommentData } from '../types/comment-data';
import type { FavoriteData } from '../types/favorite-data.js';
import { APIRoute, AppRoute } from './../constants';
import {
  redirectToRoute,
} from './action';
import { saveToken, dropToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<ExtendedOffer, ExtendedOffer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Reviews, Offer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'comments/fetchComments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<Review, [string, CommentData], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'comments/postComment',
  async ([offerId, { comment, rating }], { extra: api }) => {
    const { data } = await api.post<Review>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });
    return data;
  });

export const fetchNearbyPlacesAction = createAsyncThunk<Offers, Offer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'offers/fetchNearbyPlaces',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'favorite/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    return data;
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<Offers, [string, number], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'favorite/changeFavoriteStatus',
  async ([offerId, status], { extra: api }) => {
    await api.post<FavoriteData>(`${APIRoute.Favorites}/${offerId}/${status}`, { offerId, status });
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    return data;
  });
