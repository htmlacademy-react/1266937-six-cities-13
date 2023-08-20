import { useState } from 'react';
import { SortOption } from '../../constants';
import type { SortType } from '../../types/sort';
import clsx from 'clsx';

type SortOptionsProps = {
  onSortingChange: (sortOption: SortType) => void;
  activeSort: SortType;
};

export default function SortOptions({ onSortingChange, activeSort }: SortOptionsProps): JSX.Element {
  const [isSelectOpen, setSelectOpen] = useState<boolean>(false);

  const handleSortingChange = (sortOption: SortType) => {
    onSortingChange(sortOption);
    setSelectOpen((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        style={{ marginLeft: '4px' }}
        tabIndex={0}
        onClick={() => setSelectOpen((prevState) => !prevState)}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={clsx('places__options', 'places__options--custom', {
          'places__options--opened': isSelectOpen
        })}
      >
        {
          Object.values(SortOption).map((item) => (
            <li
              className={clsx('places__option', {
                'places__option--active': item === activeSort
              }
              )}
              key={item}
              tabIndex={0}
              onClick={() => handleSortingChange(item)}
            >
              {item}
            </li>
          )
          )
        }
      </ul>
    </form >
  );
}
