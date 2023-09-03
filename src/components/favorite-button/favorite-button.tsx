import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import type { Offer } from '../../types/offer';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { getFavorites } from '../../store/favorite-slice/favorite-selectors';
import { getAuthorizationStatus } from '../../store/user-slice/user-selectors';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import clsx from 'clsx';

type FavoriteButtonProps = {
  offerId: Offer['id'];
}

function FavoriteButton({ offerId }: FavoriteButtonProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favorites = useAppSelector(getFavorites);

  const isCurrentOfferFavorite = favorites.some((item) => item.id === offerId);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(changeFavoriteStatusAction([offerId, isCurrentOfferFavorite ? 0 : 1]));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={clsx('place-card__bookmark-button', 'button', {
        'place-card__bookmark-button--active': isCurrentOfferFavorite && authorizationStatus === AuthorizationStatus.Auth,
      })}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isCurrentOfferFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default FavoriteButton;
