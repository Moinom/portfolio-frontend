import * as apiUrls from '../utils/urls';
import { Art, Code } from '../utils/types';

export async function getArt(): Promise<Art[]> {
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
    return [];
  }
}

export async function getCode(): Promise<Code[]> {
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
    return [];
  }
}
