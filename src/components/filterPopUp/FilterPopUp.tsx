import React from 'react';
import styles from './FilterPopUp.module.css';
import { ReactComponent as CloseIcon } from '../../assets/icons/x.svg';

interface FilterProps {
  togglePopupVisibility: () => void;
  updateFilter: (index: number) => void;
  filters: {
    tag: string;
    checked: boolean;
    name: string;
  }[];
}

const FilterPopUp = ({
  updateFilter,
  filters,
  togglePopupVisibility,
}: FilterProps) => {
  return (
    <>
      <div className={styles.popupBackground} onClick={togglePopupVisibility} />
      <ul className={styles.popupWrapper}>
        <CloseIcon
          className={styles.closeIcon}
          onClick={togglePopupVisibility}
        />
        {filters.map((filter, index) => (
          <li>
            <input
              type="checkbox"
              id={filter.tag + index}
              name={filter.tag}
              onChange={() => updateFilter(index)}
              checked={filter.checked}
            />
            <label htmlFor={filter.tag}>{filter.name}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilterPopUp;
