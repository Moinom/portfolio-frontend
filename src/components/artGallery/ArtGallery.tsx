import React, { useCallback, useEffect, useState } from 'react';
import FilterPopUp from '../filterPopUp/FilterPopUp';
import { artFilters, Filter } from '../../utils/filters';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import styles from './ArtGallery.module.css';
import { getArt } from '../../api/apiCalls';
import { Art } from '../../utils/types';
import ArtCard from '../artCard/ArtCard';

const ArtGallery = () => {
  const [filters, setFilters] = useState(artFilters);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [art, setArt] = useState<Art[]>([]);
  const [desktopView, setDesktopView] = useState(true);

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
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setDesktopView(true);
      } else {
        setDesktopView(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div className={styles.filter} onClick={togglePopupVisibility}>
        <FilterIcon className={styles.filterIcon} title="filter" />
        <h1>Filter</h1>
      </div>
      {isPopupVisible && (
        <FilterPopUp
          filters={filters}
          updateFilter={updateFilter}
          togglePopupVisibility={togglePopupVisibility}
        />
      )}
      <div className={styles.gallery} data-testid="artGallery">
        {art
          .filter((artItem) =>
            artItem.tags.some((tag) => selectedTags.includes(tag))
          )
          .map((item, index) => {
            return (
              <ArtCard
                art={item}
                desktopView={desktopView}
                key={`artcard${index}`}
              />
            );
          })}
      </div>
    </section>
  );
};
export default ArtGallery;
