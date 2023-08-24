import { useAppDispatch, useAppSelector } from '../../hooks';
import PlaceCard from '../../components/place-card/place-card';
import { CardType } from '../../constants';
import { fetchFavoritesAction } from '../../store/api-actions';


export default function FavoritesPage(): JSX.Element {

  const favorites = useAppSelector((state) => state.favorites);

  const cities: string[] = [];
  favorites.forEach((item) => {
    cities.push(item.city.name);
  });

  const locations = [...new Set(cities)];

  const dispatch = useAppDispatch();

  dispatch(fetchFavoritesAction());


  return (
    < div className="page" >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div >
  );
}
