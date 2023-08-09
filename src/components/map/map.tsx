import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import { City, Offer, Offers } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CardType, getPropertyByType } from '../../constants';
import 'leaflet/dist/leaflet.css';
import { clsx } from 'clsx';


type MapProps = {
  city: City;
  offers: Offers;
  activeCard?: Offer | undefined;
  cardType?: typeof CardType[keyof typeof CardType] | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

export default function Map({ city, offers, activeCard, cardType }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: defaultCustomIcon,
        });

        marker
          .setIcon(
            activeCard !== undefined && offer === activeCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, activeCard, offers]);

  if (cardType === undefined) {
    return undefined;
  }


  return (
    <section
      className={clsx(`${cardType}__map`, 'map')}
      style={{
        width: getPropertyByType(cardType)?.map?.width,
        height: getPropertyByType(cardType)?.map?.height
      }}
      ref={mapRef}
    />
  );
}
