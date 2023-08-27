import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import NotFoundPage from '../not-found-page/not-found-page';
import { CardType } from '../../constants';
import { getRatingWidth, capitalizeFirstLetter } from '../../utils';
import {
  fetchOfferAction,
  fetchReviewsAction,
  fetchNearbyPlacesAction
} from '../../store/api-actions';
import clsx from 'clsx';
import LoadingScreen from '../../components/loading-screen/loading-screen';

export default function OfferPage(): JSX.Element {
  const params = useParams();
  const offerId = params.id;

  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  const {
    id,
    title,
    price,
    images,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    isFavorite,
    city } = useAppSelector((state) => state.offer);

  const reviews = useAppSelector((state) => state.reviews);
  const nearbyPlaces = useAppSelector((state) => state.nearbyPlaces).slice(0, 3);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchReviewsAction(offerId));
      dispatch(fetchNearbyPlacesAction(offerId));
    }

  }, [offerId, dispatch]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        {id === undefined && isDataLoading === false && <NotFoundPage />}
        {id === undefined || isDataLoading
          ?
          <LoadingScreen />
          :
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {isPremium &&
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {title}
                  </h1>
                  <button
                    className={clsx('offer__bookmark-button', 'button', {
                      'offer__bookmark-button--active': isFavorite
                    })}
                    type="button"
                  >
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: getRatingWidth(rating) }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{capitalizeFirstLetter(type)}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">€{price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {goods.map((item) => (
                      <li className="offer__inside-item" key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className={clsx('offer__avatar-wrapper', 'user__avatar-wrapper', {
                      'offer__avatar-wrapper--pro': host.isPro
                    }
                    )}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={host.avatarUrl}
                        width={74}
                        height={74}
                        alt={`Host avatar ${host.name}`}
                      />
                    </div>
                    <span className="offer__user-name">{host.name}</span>
                    {host.isPro &&
                      <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    {description
                      .split('.')
                      .map((item) => (
                        <p className="offer__text" key={item}>
                          {`${item}.`}
                        </p>
                      ))}
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews ·
                    <span className="reviews__amount">
                      {reviews.length}
                    </span>
                  </h2>
                  <ReviewList reviews={reviews} />
                  <ReviewForm />
                </section>
              </div>
            </div>
            <Map offers={nearbyPlaces} city={city} cardType={CardType.Offer} />
          </section>}

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlaceList offers={nearbyPlaces} cardType={CardType.Nearby} />
          </section>
        </div>
      </main>
    </div >
  );
}
