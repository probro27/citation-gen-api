import _metascraper, { Scraper, Metadata } from "metascraper";
import title from "metascraper-title";
import author from "metascraper-author";
import date from "metascraper-date";
import publisher from "metascraper-publisher";
import url from "metascraper-url";
import size from "metascraper-size";
import modificationTime from "metascraper-modification-time";
import browserless from 'browserless';
import getHTML from 'html-get';

class Article extends Source {

    metascraper: Scraper;
    metadata: Metadata;

    constructor(articleUrl: string) {
        super(articleUrl);
        this.metascraper = _metascraper([title(), author(), date(), publisher(), url(), size(), modificationTime()]);
    }
    private async getContent(browserless) {
        const browserContext = browserless.createContext();
        const promise = getHTML(this.url, { getBrowserless: () => browserContext });
        promise.then(() => browserContext).then(browser => browser.destroyContext());
        return promise;
    }

    private assignMetadata(metadata: Metadata): void {
        console.log(metadata);
        this.metadata = metadata;
    }

    public extractData(): IDetails {
        const _browserless = browserless();
        this.getContent(_browserless)
            .then(this.metascraper)
            .then(metadata => this.assignMetadata(metadata))
            .then(browserless.close);
        
        const details: IDetails = {
            'author': this.metadata.author,
            'title': this.metadata.title,
            'publisher': this.metadata.publisher,
            'yearOfPublication': this.metadata.date
        };
        this.details = details;
        return this.details;
    }
}
