import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from '../types/state.js';
import type { Reviews } from '../types/review.js';
import type { Offers, ExtendedOffer } from '../types/offer';
import { APIRoute, ERROR_TIMEOUT } from './../constants';
import {
  fetchOffers,
  setError,
  fetchReviews,
  fetchNearbyPlaces,
  fetchFavorites,
  setDataLoadingStatus,
} from './action';
import { store } from '../store/index';

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

export const fetchOfferAction = createAsyncThunk<ExtendedOffer, ExtendedOffer['id'], {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ExtendedOffer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  },
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
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

export const fetchNearbyPlacesAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyPlaces',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${offerId} / nearby`);
    dispatch(fetchNearbyPlaces(data));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyPlaces',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    dispatch(fetchFavorites(data));
  },
);
