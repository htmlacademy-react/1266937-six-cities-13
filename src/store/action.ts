import { createAction } from '@reduxjs/toolkit';
import { LocationItem } from '../constants';

export const toggleLocationItem = createAction<typeof LocationItem[keyof typeof LocationItem]>('offers/toggleLocationItem');

export const getOfferListByLocation = createAction('offers/getOfferListByLocation');
