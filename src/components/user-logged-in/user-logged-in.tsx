import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { getAuthorizationStatus } from '../../store/user-slice/user-selectors';
import { logoutAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorite-slice/favorite-selectors';

function UserLoggedIn(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites = useAppSelector(getFavorites);

  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">
            Oliver.conner@gmail.com
          </span>
          <span className="header__favorite-count">
            {authorizationStatus === AuthorizationStatus.Auth ? favorites.length : 0}
          </span>
        </Link>
      </li >
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </Fragment >
  );
}

export default UserLoggedIn;
