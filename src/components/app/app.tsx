import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../constants';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import Layout from '../layout/layout';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus, getAuthCheckedStatus } from '../../store/user-slice/user-selectors';
import { fetchFavoritesAction } from '../../store/api-actions';

export default function App(): JSX.Element {
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, authorizationStatus]);

  // || isOffersDataLoading
  if (!isAuthChecked) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<Layout />}>
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute
                  authorizationStatus={authorizationStatus}
                >
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage />}
            />
          </Route>
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
