import { Offers } from '../types/offer';

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
];
