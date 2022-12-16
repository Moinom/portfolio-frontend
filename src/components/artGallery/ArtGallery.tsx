import React, { useContext, useState } from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeProvider';
import FilterPopUp from '../filterPopUp/FilterPopUp';
import { artFilters } from '../filterPopUp/filters';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import styles from './ArtGallery.module.css';

const ArtGallery = () => {
  const { theme } = useContext(ThemeContext);
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

  return (
    <section>
      <div className={styles.filter} onClick={togglePopupVisibility}>
        <FilterIcon
          className={`${styles.filterIcon} ${
            theme === themes.code ? styles.codeStrokeColour : ''
          }`}
        />
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
