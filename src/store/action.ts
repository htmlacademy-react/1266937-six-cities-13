import { createAction } from '@reduxjs/toolkit';
import { LocationItem } from '../constants';

export const changeLocationItem = createAction<LocationItem>('offers/changeLocationItem');

export const getOfferList = createAction('offers/getOfferList');
