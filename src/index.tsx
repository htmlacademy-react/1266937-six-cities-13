import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { extendedOffers, offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
export const Data = {
  offersCount: 200,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount={Data.offersCount}
      offers={offers}
      reviews={reviews}
      city={offers[0].city}
      extendedOffers={extendedOffers}
    />
  </React.StrictMode>
);
