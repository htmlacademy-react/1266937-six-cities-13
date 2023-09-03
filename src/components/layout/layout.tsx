import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import UserLoggedIn from '../user-logged-in/user-logged-in';
import UserLoggedOut from '../user-logged-out/user-logged-out';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-slice/user-selectors';
import clsx from 'clsx';

function Layout(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { pathname } = useLocation();

  // const offers = useAppSelector(getOffers);

  const isLoginPage = pathname === AppRoute.Login;
  const isMainPage = pathname === AppRoute.Main;
  const isFavoritesPage = pathname === AppRoute.Favorites;
  // const isMainEmpty = isFavoritesPage && offerListByLocation.length === 0;

  return (
    <div className={clsx('page', {
      'page--gray page--login': isLoginPage,
      'page--gray page--main': isMainPage,
    })}
    >
      <header>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={clsx('header__logo-link', {
                  'header__logo-link--active': isMainPage
                })}
                to={AppRoute.Main}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            {!isLoginPage &&
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {authorizationStatus === AuthorizationStatus.Auth
                    ?
                    <UserLoggedIn />
                    :
                    <UserLoggedOut />}
                </ul>
              </nav>}
          </div>
        </div>
      </header>

      <Outlet />

      {
        isFavoritesPage &&
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={64}
              height={33}
            />
          </Link>
        </footer>
      }
    </div>
  );
}

export default Layout;
