import { Apa } from '../model/apa';
import { Article } from '../model/article';
import { Request, Response } from 'express';

export const getApaCitationFromArticle = async (
  req: Request,
  res: Response
) => {
  const url = req.body.url;
  const source = new Article(url);
  const citationSource = new Apa(source, 7);
  const citation = await citationSource.getCitation();
  res.json({ result: citation });
};
