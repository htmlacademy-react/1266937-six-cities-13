import { MAX_RATING } from './constants';

export const capitalizeFirstLetter = (str: string): string => str.replace(/^./, str[0].toUpperCase());

export const getRatingWidth = (rating: number): string => `${(Math.round(rating) / MAX_RATING) * 100}%`;
