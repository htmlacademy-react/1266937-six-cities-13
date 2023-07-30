import { Offer } from '../../types/offer';
import { clsx } from 'clsx';
import { capitalizeFirstLetter, getRatingWidth } from '../../utils';

type PlaceCardProps = {
  offer: Offer;
  setActiveCard: (activeCard: object) => void;
}

export default function PlaceCard({ offer, setActiveCard }: PlaceCardProps): JSX.Element {
  const { isPremium, previewImage, title, price, isFavorite, rating, type } = offer;
  const activeCard = offer;

  const handleMouseEnter = () => {
    setActiveCard(activeCard);
  };

  const handleMouseLeave = () => {
    setActiveCard({});
  };

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={clsx('place-card__bookmark-button', isFavorite && 'place-card__bookmark-button--active', 'button')}
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
