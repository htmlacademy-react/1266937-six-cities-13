import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

export const Data = {
  placesCount: 5,
  offersCount: 200,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Data.placesCount}
      offersCount={Data.offersCount}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>
);
