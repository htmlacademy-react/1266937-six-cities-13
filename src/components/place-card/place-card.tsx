import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import type { Offer } from '../../types/offer';
import { clsx } from 'clsx';
import { capitalizeFirstLetter, getRatingWidth } from '../../utils';
import { CardType, getPropertyByType } from '../../constants';
import FavoriteButton from '../favorite-button/favorite-button';

type PlaceCardProps = {
  offer: Offer;
  cardType: typeof CardType[keyof typeof CardType];
  onOfferCardHover?: (offerCardId: Offer['id'] | undefined) => void;
}

export default function PlaceCard({ offer, cardType, onOfferCardHover }: PlaceCardProps): JSX.Element {
  const {
    isPremium,
    previewImage,
    title,
    price,
    rating,
    type,
    id } = offer;

  const handleOfferCardHover = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onOfferCardHover?.(offer.id);
  };

  const handleOfferCardUnhover = () => onOfferCardHover?.(undefined);

  return (
    <article
      className={clsx(`${cardType}__card`, 'place-card')}
      onMouseEnter={handleOfferCardHover}
      onMouseLeave={handleOfferCardUnhover}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={clsx(`${cardType}__image-wrapper`, 'place-card__image-wrapper')}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={getPropertyByType(cardType)?.previewImage?.width}
            height={getPropertyByType(cardType)?.previewImage?.height}
            alt={title}
          />
        </a>
      </div>
      <div className={clsx('place-card__info', {
        'favorites__card-info': cardType === CardType.Favorites,
      })}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton offerId={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article >
  );
}
