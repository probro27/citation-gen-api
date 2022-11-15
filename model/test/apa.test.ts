import { Apa } from '../apa';
import { Article } from '../article';
import { Citation } from '../citation';
import { Source } from '../source';

describe('testing apa citation', () => {
    test('empty url should return in empty citation', async () => {
        const src: Source = new Article("");
        const citation: Citation = new Apa(src, 7);
        expect(await citation.getCitation?.() == '');
    })
    test('valid url test', async () => {
        const src: Source = new Article("https://doi.org/10.1007/s10639-021-10650-9");
        const citation: Citation = new Apa(src, 7);
        expect(await citation.getCitation?.() == 'Alaattin Parlakkiliç (2021-07-12T00:00:00.000Z), Evaluating the effects of responsive design on the usability of academic websites in the pandemic - Education and Information Technologies, SpringerLink, https://doi.org/10.1007/s10639-021-10650-9');
    })
})
