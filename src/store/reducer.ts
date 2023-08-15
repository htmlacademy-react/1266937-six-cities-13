import { createReducer } from '@reduxjs/toolkit';
import { toggleLocationItem, getOfferListByLocation } from './action';
import { DEFAULT_LOCATION_ITEM, LocationItem } from '../constants';
import { offers } from '../mocks/offers';

const initialState = {
  currentLocationItem: DEFAULT_LOCATION_ITEM as keyof typeof LocationItem,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleLocationItem, (state, action) => {
      state.currentLocationItem = action.payload;
    })
    .addCase(getOfferListByLocation, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.currentLocationItem);
    });
});

export { reducer };
