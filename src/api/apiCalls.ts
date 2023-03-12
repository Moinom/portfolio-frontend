import * as apiUrls from './urls';

export const getArt = async () => {
  try {
    let options = {
      method: 'GET',
    };
    const response = await fetch(`${apiUrls.artUrl}`, options);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch (error) {
    console.log(error);
  }
};

export const getCode = async () => {
  try {
    let options = {
      method: 'GET',
    };
    const response = await fetch(`${apiUrls.codeUrl}`, options);
    if (response.ok) {
      return response.json();
    }
    throw response;
  } catch (error) {
    console.log(error);
  }
};
