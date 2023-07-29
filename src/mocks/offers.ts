import type { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: crypto.randomUUID(),
    title: 'House in countryside',
    type: 'room',
    price: 140,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremium: true,
    rating: 4.9,
  },

  {
    id: crypto.randomUUID(),
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 183,
    previewImage: 'img/apartment-02.jpg',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
  },

  {
    id: crypto.randomUUID(),
    title: 'Amazing and Extremely Central Flat',
    type: 'private room',
    price: 381,
    previewImage: 'img/apartment-03.jpg',
    isFavorite: true,
    isPremium: true,
    rating: 3.4,
  },

  {
    id: crypto.randomUUID(),
    title: 'The house among olive ',
    type: 'house',
    price: 306,
    previewImage: 'img/apartment-01.jpg',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
  },
];
