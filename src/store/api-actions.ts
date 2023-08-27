import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../types/state.js';
import type { Reviews } from '../types/review.js';
import type { Offers, Offer, ExtendedOffer } from '../types/offer';
import type { AuthData } from '../types/auth-data';
import type { UserData } from '../types/user-data';
import { APIRoute, ERROR_TIMEOUT, AppRoute, AuthorizationStatus } from './../constants';
import {
  fetchOffers,
  setError,
  fetchOffer,
  fetchReviews,
  fetchNearbyPlaces,
  setDataLoadingStatus,
  requireAuthorization,
  redirectToRoute,
} from './action';
import { store } from '../store/index';
import { saveToken, dropToken } from '../services/token';

export const clearError = createAsyncThunk(
  'offers/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      ERROR_TIMEOUT,
    );
  }
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(true));
    dispatch(fetchOffers(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, ExtendedOffer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${offerId}`);
    dispatch(setDataLoadingStatus(true));
    dispatch(fetchOffer(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const fetchReviewsAction = createAsyncThunk<void, Offer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Reviews>(`${APIRoute.Reviews}/${offerId}`);
    dispatch(fetchReviews(data));
  },
);

export const fetchNearbyPlacesAction = createAsyncThunk<void, Offer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyPlaces',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(fetchNearbyPlaces(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
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
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
