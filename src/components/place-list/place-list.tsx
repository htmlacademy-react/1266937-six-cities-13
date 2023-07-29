import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';

type PlaceListProps = {
  offers: Offers;
}


export default function PlaceList({ offers }: PlaceListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) =>
          <PlaceCard key={offer.id} offer={offer} />)
      }
    </div>
  );
}
