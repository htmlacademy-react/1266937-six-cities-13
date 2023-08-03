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

export const CardType = {
  Cities: 'cities',
  Favorites: 'favorites',
  Nearby: 'nearby',
} as const;
