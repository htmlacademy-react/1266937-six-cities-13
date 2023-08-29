import { store } from '../store/index';
import { AuthorizationStatus } from '../constants';
import { Offers, ExtendedOffer } from '../types/offer';
import { Reviews } from './review';
import { LocationItem } from '../constants';

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
};

export type OffersSlice = {
  offers: Offers;
  offer: ExtendedOffer;
  nearbyPlaces: Offers;
  isDataLoading: boolean;
  currentLocationItem: LocationItem;
}

export type CommentsSlice = {
  comments: Reviews;
  isDataLoading: boolean;
  isDataPosting: boolean;
}

export type FavoriteSlice = {
  favorites: Offers;
  isDataLoading: boolean;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
