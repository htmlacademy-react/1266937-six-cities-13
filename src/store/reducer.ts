import { createReducer } from '@reduxjs/toolkit';
import {
  changeLocationItem,
  fetchOffers,
  fetchOffer,
  fetchReviews,
  fetchNearbyPlaces,
  fetchFavorites,
  requireAuthorization,
  setError,
  setDataLoadingStatus,
  setDataPostingStatus,
  postComment,
} from './action';
import { AuthorizationStatus, DEFAULT_LOCATION_ITEM, LocationItem } from '../constants';
import { Offers, ExtendedOffer } from '../types/offer';
import { Reviews } from '../types/review';

type OfferState = {
  currentLocationItem: LocationItem;
  offers: Offers;
  offer: ExtendedOffer;
  reviews: Reviews;
  nearbyPlaces: Offers;
  favorites: Offers;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isDataLoading: boolean;
  isDataPosting: boolean;
};

const initialState: OfferState = {
  currentLocationItem: DEFAULT_LOCATION_ITEM,
  offers: [],
  offer: {} as ExtendedOffer,
  reviews: [],
  nearbyPlaces: [],
  favorites: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isDataLoading: false,
  isDataPosting: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocationItem, (state, action) => {
      state.currentLocationItem = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(fetchReviews, (state, action) => {
      state.reviews = action.payload.slice(0, 10);
    })
    .addCase(fetchNearbyPlaces, (state, action) => {
      state.nearbyPlaces = action.payload;
    })
    .addCase(fetchFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setDataPostingStatus, (state, action) => {
      state.isDataPosting = action.payload;
    })
    .addCase(postComment, (state, action) => {
      state.reviews.push(action.payload);
    });
});

export { reducer };
