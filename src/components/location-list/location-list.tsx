import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeLocationItem } from '../../store/offers-slice/offers-slice';
import { LocationItem } from '../../constants';
import clsx from 'clsx';
import './location-list.css';

type LocationListProps = {
  currentLocationItem: LocationItem;
}

export default function LocationList({ currentLocationItem }: LocationListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(LocationItem).map((item) => (
        <li className="locations__item" key={item}>
          <Link to="/"
            className={clsx('locations__item-link', 'tabs__item', {
              'tabs__item--active': currentLocationItem === item
            }
            )}
            onClick={() => {
              dispatch(changeLocationItem(item));
            }}
          >
            <span>{item}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
