import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LocationItem, NameSpace } from '../../constants';
import type { OffersSlice } from '../../types/state';
import { fetchOffersAction, fetchOfferAction, fetchNearbyPlacesAction } from '../api-actions';
import type { ExtendedOffer } from '../../types/offer';
import { DEFAULT_LOCATION_ITEM } from '../../constants';

const initialState: OffersSlice = {
  currentLocationItem: DEFAULT_LOCATION_ITEM,
  offers: [],
  offer: {} as ExtendedOffer,
  nearbyPlaces: [],
  isDataLoading: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeLocationItem: (state, action: PayloadAction<LocationItem>) => {
      state.currentLocationItem = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.offer = action.payload;
      })
      .addCase(fetchNearbyPlacesAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchNearbyPlacesAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.nearbyPlaces = action.payload;
      });
  }
});

export const { changeLocationItem } = offersSlice.actions;
