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

  return (
    <div className={clsx('page', {
      'page--gray page--login': pathname === AppRoute.Login,
      'page--gray page--main': pathname === AppRoute.Main,
    })}
    >
      <header>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={clsx('header__logo-link', {
                  'header__logo-link--active': pathname === AppRoute.Main
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
            {pathname !== AppRoute.Login &&
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

      {pathname === AppRoute.Favorites &&
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
        </footer>}
    </div>
  );
}

export default Layout;
