import React, { useEffect, useState } from 'react';
import FilterPopUp from '../filterPopUp/FilterPopUp';
import { artFilters } from '../filterPopUp/filters';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import styles from './ArtGallery.module.css';
import { getArtByTags } from '../../api/apiCalls';

const ArtGallery = () => {
  const [filters, setFilters] = useState(artFilters);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopupVisibility = () => {
    setPopupVisible(!isPopupVisible);
  };

  const updateFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters[index].checked = !filters[index].checked;
    setFilters(updatedFilters);
  };

  useEffect(() => {
    getArtByTags(filters);
  }, [filters]);

  return (
    <section>
      <div className={styles.filter} onClick={togglePopupVisibility}>
        <FilterIcon className={styles.filterIcon} />
        <h1>Filter</h1>
      </div>
      {isPopupVisible && (
        <FilterPopUp
          filters={filters}
          updateFilter={updateFilter}
          togglePopupVisibility={togglePopupVisibility}
        />
      )}
    </section>
  );
};
export default ArtGallery;
