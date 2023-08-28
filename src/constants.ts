export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'Unknown',
}

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

export const ratingTitle = [
  {
    value: 5,
    title: 'perfect'
  },
  {
    value: 4,
    title: 'good'
  },
  {
    value: 3,
    title: 'not bad'
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  },
];

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

export const SortOption = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

export const DEFAULT_SORT_OPTION = SortOption.Popular;

// API
export const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  Offers = '/offers',
  Reviews = '/comments',
  Login = '/login',
  Favorites = '/favorite',
  Logout = '/logout',
}

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export const ERROR_TIMEOUT = 2000;

export const commentLength = {
  MIN: 50,
  MAX: 300,
};
