import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import type { City } from '../types/offer';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        // ссылка на элемент, куда отрендерить карту
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        // координаты центра карты
        zoom: city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      // Метод titleLayer позволяет подключить определенный слой карты

      instance.addLayer(layer);
      // Метод указывает к какому объекту карты добавить подключенный слой

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);
  // Эффект будет срабатывать только когда в компоненте useMap будут обновлены значения переменных mapRef и city

  return map;
};
