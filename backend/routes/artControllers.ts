import { Request, Response } from 'express';
import imagekit from '../imageKit';
import { ParsedQs } from 'qs';

const getAllArt = (request: Request, response: Response) => {
  const checkedTags = request.query.tags || ['illustration'];

  if (!isStringArray(checkedTags)) {
    response.status(500).json({ error: 'Invalid dataset' });
    return;
  }

  imagekit.listFiles(
    {
      skip: 0,
      limit: 100,
      tags: checkedTags as string[],
    },
    function (error, result) {
      if (error) console.log(error);
      else response.json(result);
    }
  );
};

function isStringArray(tags: string | ParsedQs | string[] | ParsedQs[]) {
  return Array.isArray(tags) && !tags.some((tag) => typeof tag !== 'string');
}

export { getAllArt };
