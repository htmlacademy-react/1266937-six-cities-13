import PlaceCard from '../place-card/place-card';
import type { Offers, Offer } from '../../types/offer';
import { CardType } from '../../constants';
import clsx from 'clsx';

type PlaceListProps = {
  offers: Offers;
  cardType: typeof CardType[keyof typeof CardType];
  handleMouseEnter?: (offer: Offer) => void;
  handleMouseLeave?: () => void;
}

export default function PlaceList({ offers, cardType, handleMouseEnter, handleMouseLeave }: PlaceListProps) {

  return (
    <div className={clsx(`${cardType}__list`, 'places__list', {
      'tabs__content': cardType === CardType.Cities
    }
    )}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={crypto.randomUUID()}
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
