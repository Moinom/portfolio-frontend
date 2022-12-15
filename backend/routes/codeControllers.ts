import { Request, Response } from 'express';
import {
  imagekitCode,
  isStringArray,
  imagekitCategories,
} from '../services/imagekitService';

const getAllCode = (request: Request, response: Response) => {
  const tag = [imagekitCategories.code];
  imagekitCode.listFiles(
    {
      skip: 0,
      limit: 100,
      tags: tag,
    },
    function (error, result) {
      if (error) {
        return response.status(500).json({ error: error });
      }
      return response.json(result);
    }
  );
};

const getCodeByTag = (request: Request, response: Response) => {
  const checkedTags = request.query.tags;

  if (!isStringArray(checkedTags)) {
    return response.status(500).json({ error: 'Invalid dataset' });
  }

  imagekitCode.listFiles(
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

export { getAllCode, getCodeByTag };
