import { ExtendedOffer, Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: '1',
    title: 'House in countryside',
    type: 'room',
    price: 140,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
  },

  {
    id: '2',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 183,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
  },

  {
    id: '3',
    title: 'Amazing and Extremely Central Flat',
    type: 'private room',
    price: 381,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: true,
    isPremium: true,
    rating: 3.4,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
  },

  {
    id: '4',
    title: 'The house among olive ',
    type: 'house',
    price: 306,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
  },
  {
    id: '5',
    title: 'Tile House',
    type: 'house',
    price: 138,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8,
  },
  {
    id: '6',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 247,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4,
  },
  {
    id: '7',
    title: 'House in countryside',
    type: 'room',
    price: 310,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.934361,
      longitude: 6.943974,
      zoom: 16
    },
  },

  {
    id: '8',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 215,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      }
    },
    location: {
      latitude: 50.947361,
      longitude: 6.9799739999999995,
      zoom: 16,
    },
  },

  {
    id: '9',
    title: 'Amazing and Extremely Central Flat',
    type: 'private room',
    price: 105,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: true,
    isPremium: true,
    rating: 3.4,
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16,
    },
  },
  {
    id: '10',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 402,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.854557,
      longitude: 4.364697,
      zoom: 16
    },
  },
  {
    id: '11',
    title: 'Tile House',
    type: 'house',
    price: 93,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.563341,
      longitude: 10.019654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8,
  },
  {
    id: '12',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 232,
    previewImage: 'img/apartment-01.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4,
  },
];

export const extendedOffers: ExtendedOffer[] = [
  {
    id: '1',
    title: 'House in countryside',
    type: 'room',
    price: 140,
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      'Heating',
    ],

    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true,
    },

    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
  },

  {
    id: '2',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 183,
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    maxAdults: 2,
    goods: [
      'Heating',
      'Coffee machine',
      'Kitchen',
      'Washing machine',
    ],

    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },

    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      '/img/apartment-01.jpg',
      'img/studio-01.jpg',
    ],
  },

  {
    id: '3',
    title: 'Amazing and Extremely Central Flat',
    type: 'private room',
    price: 381,
    isFavorite: true,
    isPremium: true,
    rating: 3.4,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. ',
    bedrooms: 3,
    maxAdults: 5,
    goods: [
      'Heating',
      'Fridge',
      'Coffee machine',
    ],

    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },

    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      '/img/apartment-01.jpg',
    ],
  },

  {
    id: '4',
    title: 'The house among olive ',
    type: 'house',
    price: 306,
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    maxAdults: 4,
    goods: [
      'Heating',
    ],

    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },

    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      '/img/apartment-01.jpg',
    ],
  },
];
