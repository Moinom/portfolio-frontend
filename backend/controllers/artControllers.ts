import { Request, Response } from 'express';
import { imagekitArt, imagekitCategories } from '../services/imagekitService';

const getArtByTag = (request: Request, response: Response) => {
  const tagParams = request.query.tags;
  if (typeof tagParams !== 'string') {
    return response.status(400).json({ error: 'Invalid dataset' });
  }
  const checkedTags =
    tagParams.length > 0 ? tagParams.split(',') : [imagekitCategories.art];

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
