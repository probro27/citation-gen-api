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
})
