import { Apa } from '../model/apa';
import { Article } from '../model/article';
import { Request, Response } from 'express';

module.exports = {
    getApaCitationFromArticle: (req: Request, res: Response) => {
        const url = req.body.url;
        const source = new Article(url);
        const citationSource = new Apa(source, 7);
        const citation = citationSource.getCitation();
        res.json({ 'result': citation })
    }
}
