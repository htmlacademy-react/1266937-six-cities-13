import { Offer } from '../../types/offer';
import { clsx } from 'clsx';
import { capitalizeFirstLetter, getRatingWidth } from '../../utils';
import { CardType } from '../../constants';

type PlaceCardProps = {
  offer: Offer;
  setActiveCard?: (activeCard: object) => void;
  cardType: typeof CardType[keyof typeof CardType];
}

const getPropertyByType = (type: string) => {
  switch (type) {
    case CardType.Cities:
      return { previewImage: { width: 260, height: 200 } };
    case CardType.Favorites:
      return { previewImage: { width: 150, height: 110 } };
  }
};

export default function PlaceCard({ offer, setActiveCard, cardType }: PlaceCardProps): JSX.Element {
  const { isPremium, previewImage, title, price, isFavorite, rating, type } = offer;
  const activeCard = offer;

  const handleMouseEnter = () => {
    if (setActiveCard) {
      return setActiveCard(activeCard);
    }
  };

  const handleMouseLeave = () => {
    if (setActiveCard) {
      return setActiveCard({});
    }
  };


  return (
    <article className={clsx(`${cardType}__card`, 'place-card')}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
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
            width={getPropertyByType(cardType)?.previewImage.width}
            height={getPropertyByType(cardType)?.previewImage.height}
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
          <button
            className={clsx('place-card__bookmark-button', 'button', {
              'place-card__bookmark-button--active': isFavorite,
            })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article >
  );
}
