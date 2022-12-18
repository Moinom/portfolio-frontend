import * as apiUrls from './urls';
import { Filter } from '../components/filterPopUp/filters';

export const getArtByTags = async (tags: Filter[]) => {
  const checkedTags = tags
    .filter((item) => item.checked && item.tag)
    .map((item) => item.tag);

  try {
    let options = {
      method: 'GET',
    };
    const response = await fetch(
      `${apiUrls.artUrl}?tags=${checkedTags}`,
      options
    );
    if (response.ok) {
      return response;
    }
    throw response;
  } catch (error) {
    console.log(error);
  }
};
