import { MAX_RATING, SortOption } from './constants';
import type { Offers } from './types/offer';
import type { SortType } from './types/sort';

export const capitalizeFirstLetter = (str: string): string => str.replace(/^./, str[0].toUpperCase());

export const getRatingWidth = (rating: number): string => `${(Math.round(rating) / MAX_RATING) * 100}%`;

export const humanizeReviewDate = (date: string): string => new Date(date)
  .toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

export const sortMap: Record<SortType, (offers: Offers) => Offers> = {
  [SortOption.Popular]: (offers) => offers.slice(),
  [SortOption.PriceLowToHigh]: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  [SortOption.PriceHighToLow]: (offers) => offers.slice().sort((a, b) => b.price - a.price),
  [SortOption.TopRatedFirst]: (offers) => offers.slice().sort((a, b) => b.rating - a.rating),
};

// Record<SortType, Offers>
