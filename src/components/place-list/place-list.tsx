import PlaceCard from '../place-card/place-card';
import { Offers, Offer } from '../../types/offer';
import { CardType } from '../../constants';

type PlaceListProps = {
  offers: Offers;
  cardType: typeof CardType[keyof typeof CardType];
  handleMouseEnter: (offer: Offer) => void;
  handleMouseLeave: () => void;
}


export default function PlaceList({ offers, cardType, handleMouseEnter, handleMouseLeave }: PlaceListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      )
      )}
    </div>
  );
}
