import PlaceCard from '../place-card/place-card';
import type { Offers } from '../../types/offer';
import { CardType } from '../../constants';
import clsx from 'clsx';

type PlaceListProps = {
  offers: Offers;
  cardType: typeof CardType[keyof typeof CardType];
  onOfferCardHover?: (offerCardId: string | undefined) => void;
}

export default function PlaceList({ offers, cardType, onOfferCardHover }: PlaceListProps) {
  return (
    <div
      className={clsx(`${cardType}__places-list`, 'places__list', {
        'tabs__content': cardType === CardType.Cities
      }
      )}
    >
      {offers.map((offer) => (
        <PlaceCard
          key={crypto.randomUUID()}
          offer={offer}
          cardType={cardType}
          onOfferCardHover={onOfferCardHover}
        />
      )
      )}
    </div>
  );
}
