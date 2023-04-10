import React, { useCallback, useEffect, useState } from 'react';
import { getCode } from '../../api/apiCalls';
import { codeFilters, Filter } from '../../utils/filters';
import { Code } from '../../utils/types';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import FilterPopUp from '../filterPopUp/FilterPopUp';
import styles from './CodeGallery.module.css';
import CodeCard from '../codeCard/CodeCard';

const CodeGallery = () => {
  const [filters, setFilters] = useState(codeFilters);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [code, setCode] = useState<Code[]>([]);

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
    getCode().then((response) => setCode(response));
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
      <div className={styles.gallery}>
        {code
          .filter((codeItem) =>
            codeItem.tags.some((tag) => selectedTags.includes(tag))
          )
          .map((item, index) => {
            return <CodeCard {...item} key={`codecard${index}`} />;
          })}
      </div>
    </section>
  );
};

export default CodeGallery;
