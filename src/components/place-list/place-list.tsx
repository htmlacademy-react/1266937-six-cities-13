import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { useState } from 'react';
import { CardType } from '../../constants';

type PlaceListProps = {
  offers: Offers;
  cardType: typeof CardType[keyof typeof CardType];
}


export default function PlaceList({ offers, cardType }: PlaceListProps) {
  const [, setActiveCard] = useState({});

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          setActiveCard={setActiveCard}
          cardType={cardType}
        />
      )
      )}
    </div>
  );
}
