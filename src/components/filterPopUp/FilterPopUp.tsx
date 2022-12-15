import React, { useState } from 'react';
import styles from './FilterPopUp.module.css';
import { artFilters } from './filters';

const FilterPopUp = () => {
  const [filters, setFilters] = useState(artFilters);

  const updateFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters[index].checked = !filters[index].checked;
    setFilters(updatedFilters);
  };

  return (
    <div className={styles.popupBackground}>
      <div className={styles.popupWrapper}>
        {filters.map((filter, index) => (
          <li>
            <input
              type="checkbox"
              id={filter.tag + index}
              name={filter.tag}
              onChange={() => updateFilter(index)}
            />
            <label htmlFor={filter.tag}>{filter.name}</label>
          </li>
        ))}
      </div>
    </div>
  );
};

export default FilterPopUp;
