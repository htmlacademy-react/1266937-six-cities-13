import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import {
  AppRoute,
  AuthorizationStatus
} from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import type {
  Offers,
  City,
  ExtendedOffer,
} from '../../types/offer';
import type { Reviews } from '../../types/review';


type AppScreenProps = {
  offersCount: number;
  offers: Offers;
  reviews: Reviews;
  city: City;
  extendedOffers: ExtendedOffer[];
}

export default function App({ offersCount, offers, extendedOffers, reviews, city }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage offersCount={offersCount} city={city} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferPage city={city} offers={offers} extendedOffers={extendedOffers} reviews={reviews} />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
