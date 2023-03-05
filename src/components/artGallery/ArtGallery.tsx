import React, { useCallback, useEffect, useState } from 'react';
import FilterPopUp from '../filterPopUp/FilterPopUp';
import { artFilters, Filter } from '../filterPopUp/filters';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import styles from './ArtGallery.module.css';
import { getArt } from '../../api/apiCalls';
import { Art } from './artTypes';
import ArtCard from '../artCard/ArtCard';

const ArtGallery = () => {
  const [filters, setFilters] = useState(artFilters);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [art, setArt] = useState<Art[]>([]);

  const togglePopupVisibility = () => {
    setPopupVisible(!isPopupVisible);
  };

  const updateSeletedFilters = useCallback((updatedFilters: Filter[]) => {
    const newFilters: string[] = [];
    updatedFilters.forEach(
      (filter) => filter.checked && newFilters.push(filter.tag)
    );
    setSelectedTags(newFilters);
  }, []);

  const updateFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters[index].checked = !filters[index].checked;
    setFilters(updatedFilters);
  };

  useEffect(() => {
    updateSeletedFilters(filters);
  }, [filters, updateSeletedFilters]);

  useEffect(() => {
    getArt().then((response) => setArt(response));
  }, []);

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
        {art
          .filter((artItem) =>
            artItem.tags.some((tag) => selectedTags.includes(tag))
          )
          .map((item, index) => {
            return <ArtCard {...item} key={`artcard${index}`} />;
          })}
      </div>
    </section>
  );
};
export default ArtGallery;
