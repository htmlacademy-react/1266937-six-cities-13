import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import type { Offer } from '../../types/offer';
import type { SortType } from '../../types/sort';
import PlaceList from '../../components/place-list/place-list';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';
import SortOptions from '../../components/sort-options/sort-options';
import { CardType, DEFAULT_SORT_OPTION } from '../../constants';
import { sortMap } from '../../utils';
import { getcurrentLocationItem } from '../../store/offers-slice/offers-selectors';
import { getOffers } from '../../store/offers-slice/offers-selectors';

export default function MainPage(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);
  const [activeSort, setActiveSort] = useState<SortType>(DEFAULT_SORT_OPTION);

  const currentLocationItem = useAppSelector(getcurrentLocationItem);
  const offers = useAppSelector(getOffers);

  const offerListByLocation = offers.filter((offer) => offer.city.name === currentLocationItem);

  const handleOfferCardHover = (offerCardId: Offer['id'] | undefined) => {
    const currentOffer = offers.find((item) =>
      item.id === offerCardId
    );

    setActiveOffer(currentOffer);
  };

  const handleSortingChange = (sortOption: SortType) => {
    setActiveSort(sortOption);
  };

  const currentCity = offerListByLocation[0].city;

  return (
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
              {`${offerListByLocation.length} ${offerListByLocation.length === 1 ? 'place' : 'places'} to stay in ${currentLocationItem}`}
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
              city={currentCity}
              offers={offerListByLocation}
              activeOffer={activeOffer}
              cardType={CardType.Cities}
            />
          </div>
        </div>
      </div>
    </main >
  );
}
