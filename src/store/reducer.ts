import { createReducer } from '@reduxjs/toolkit';
import { changeLocationItem, getOfferList } from './action';
import { DEFAULT_LOCATION_ITEM } from '../constants';
import { offers } from '../mocks/offers';

const initialState = {
  currentLocationItem: DEFAULT_LOCATION_ITEM,
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocationItem, (state, action) => {
      state.currentLocationItem = action.payload;
    })
    .addCase(getOfferList, (state) => {
      state.offers = offers;
    });
});

export { reducer };
