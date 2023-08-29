import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import PlaceCard from '../../components/place-card/place-card';
import { CardType } from '../../constants';
import { fetchFavoritesAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorite-slice/favorite-selectors';

export default function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(getFavorites);

  const cities: string[] = [];
  favorites.forEach((item) => {
    cities.push(item.city.name);
  });

  const locations = [...new Set(cities)];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {locations.map((location) => (
              <li key={location} className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{location}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {(favorites.filter((favorite) => favorite.city.name === location)).map((item) => (
                    <PlaceCard key={item.id} offer={item} cardType={CardType.Favorites} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main >
  );
}
