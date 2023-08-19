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
  Nearby: 'near-places',
  Offer: 'offer',
} as const;

export enum LocationItem {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const DEFAULT_LOCATION_ITEM = LocationItem.Paris;

export enum RatingTitle {
  perfect = 5,
  good = 4,
  'not bad' = 3,
  badly = 2,
  terribly = 1
}

export const URL_MARKER_DEFAULT = '../img/pin.svg';
export const URL_MARKER_CURRENT = '../img/pin-active.svg';

export const getPropertyByType = (type: string) => {
  switch (type) {
    case CardType.Cities:
      return {
        previewImage:
        {
          width: 260,
          height: 200
        },
        map: {
          width: '100%',
          height: 'auto'
        },
      };
    case CardType.Favorites:
      return {
        previewImage:
        {
          width: 150,
          height: 110
        },
      };
    case CardType.Offer:
      return {
        map: {
          width: '100%',
          height: '579px'
        },
      };
  }
};

export enum sortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}
