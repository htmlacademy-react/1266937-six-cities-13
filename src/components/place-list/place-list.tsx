import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { useState } from 'react';

type PlaceListProps = {
  offers: Offers;
}


export default function PlaceList({ offers }: PlaceListProps) {
  const [, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setActiveCard={setActiveCard}
        />
      )
      )}
    </div>
  );
}
