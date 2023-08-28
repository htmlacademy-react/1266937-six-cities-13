import { createAction } from '@reduxjs/toolkit';
import { LocationItem, AuthorizationStatus } from '../constants';
import type { Offers, ExtendedOffer } from '../types/offer';
import { Reviews, Review } from '../types/review';

export const changeLocationItem = createAction<LocationItem>('offers/changeLocationItem');

export const fetchOffers = createAction<Offers>('data/fetchOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');

export const setError = createAction<string | null>('offers/setError');

export const fetchOffer = createAction<ExtendedOffer>('data/fetchOffer');

export const fetchReviews = createAction<Reviews>('data/fetchReviews');

export const fetchNearbyPlaces = createAction<Offers>('data/fetchNearbyPlaces');

export const fetchFavorites = createAction<Offers>('data/fetchFavorites');

export const redirectToRoute = createAction<string>('user/redirectToRoute');

export const setDataPostingStatus = createAction<boolean>('data/setDataPostingStatus');

export const postComment = createAction<Review>('data/postComment');
