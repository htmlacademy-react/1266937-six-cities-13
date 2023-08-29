import { NameSpace } from '../../constants';
import { RootState } from '../../types/state';
import type { Offers, ExtendedOffer } from '../../types/offer';
import { LocationItem } from '../../constants';

export const getcurrentLocationItem = (state: RootState): LocationItem => state[NameSpace.Offers].currentLocationItem;
export const getOffers = (state: RootState): Offers => state[NameSpace.Offers].offers;
export const getOffer = (state: RootState): ExtendedOffer => state[NameSpace.Offers].offer;
export const getNearbyOffers = (state: RootState): Offers => state[NameSpace.Offers].nearbyPlaces;
export const getDataLoadingStatus = (state: RootState): boolean => state[NameSpace.Offers].isDataLoading;
