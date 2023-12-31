export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  city: City;
  location: Location;
};

export type Offers = Offer[];

export type ExtendedOffer = Omit<Offer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  images: string[];
  maxAdults: number;
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}
