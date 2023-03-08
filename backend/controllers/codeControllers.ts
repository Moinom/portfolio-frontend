import { Request, Response } from 'express';
import {
  ImagekitResponse,
  imagekitCode,
  imagekitCategories,
} from '../services/imagekitService';

const getCode = (request: Request, response: Response) => {
  imagekitCode.listFiles(
    {
      skip: 0,
      limit: 100,
      tags: [imagekitCategories.code],
    },
    function (error, result: ImagekitResponse[] | null) {
      if (error) {
        return response.status(500).json({ error: error });
      }
      return response.json(result);
    }
  );
};

export { getCode };
