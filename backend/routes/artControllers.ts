import { Request, Response } from 'express';
import {
  imagekitArt,
  isStringArray,
  imagekitCategories,
} from '../services/imagekitService';

const getArtByTag = (request: Request, response: Response) => {
  const checkedTags = request.query.tags || [imagekitCategories.art];

  if (!isStringArray(checkedTags)) {
    return response.status(400).json({ error: 'Invalid dataset' });
  }

  imagekitArt.listFiles(
    {
      skip: 0,
      limit: 100,
      tags: checkedTags as string[],
    },
    function (error, result) {
      if (error) {
        return response.status(500).json({ error: error });
      }
      return response.json(result);
    }
  );
};
export { getArtByTag };
