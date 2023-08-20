import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import type { Offer, City } from '../../types/offer';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';
import SortOptions from '../../components/sort-options/sort-options';
import { CardType, DEFAULT_SORT_OPTION } from '../../constants';
import { sortMap } from '../../utils';
import { SortType } from '../../types/sort';

type MainPageProps = {
  city: City;
}

export default function MainPage({ city }: MainPageProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const currentLocationItem = useAppSelector((state) => state.currentLocationItem);

  const offers = useAppSelector((state) => state.offers);

  const offerListByLocation = offers.filter((offer) => offer.city.name === currentLocationItem);

  const handleOfferCardHover = (offerCardId: Offer['id'] | undefined) => {
    const currentOffer = offers.find((item) =>
      item.id === offerCardId
    );
    setActiveOffer(currentOffer);
  };

  const [activeSort, setActiveSort] = useState<SortType>(DEFAULT_SORT_OPTION);

  const handleSortingChange = (sortOption: SortType) => {
    setActiveSort(sortOption);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList currentLocationItem={currentLocationItem} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {`${offerListByLocation.length} ${offerListByLocation.length > 1 ? 'places' : 'place'} to stay in ${currentLocationItem}`}
              </b>
              <SortOptions
                onSortingChange={handleSortingChange}
                activeSort={activeSort}
              />
              <PlaceList
                offers={sortMap[activeSort](offerListByLocation)}
                cardType={CardType.Cities}
                onOfferCardHover={handleOfferCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                offers={offerListByLocation}
                activeOffer={activeOffer}
                cardType={CardType.Cities}
              />
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}
