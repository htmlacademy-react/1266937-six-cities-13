export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
} as const;

export const MAX_RATING = 5;
export const DEFAULT_RATING = 0;

export const CardType = {
  Cities: 'cities',
  Favorites: 'favorites',
  Nearby: 'nearby',
} as const;

export enum RatingTitle {
  perfect = 5,
  good = 4,
  'not bad' = 3,
  badly = 2,
  terribly = 1
}

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';
