import React, { useEffect, useState } from 'react';
import FilterPopUp from '../filterPopUp/FilterPopUp';
import { artFilters } from '../filterPopUp/filters';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import styles from './ArtGallery.module.css';
import { getArtByTags } from '../../api/apiCalls';
import { Art } from './artTypes';
import ArtCard from '../artCard/ArtCard';

const ArtGallery = () => {
  const [filters, setFilters] = useState(artFilters);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [art, setArt] = useState<Art[]>([]);

  const togglePopupVisibility = () => {
    setPopupVisible(!isPopupVisible);
  };

  const updateFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters[index].checked = !filters[index].checked;
    setFilters(updatedFilters);
  };

  useEffect(() => {
    getArtByTags(filters).then((response) => setArt(response));
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
      <div className={styles.gallery}>
        {art.map((item) => {
          return <ArtCard {...item} />;
        })}
      </div>
    </section>
  );
};
export default ArtGallery;
