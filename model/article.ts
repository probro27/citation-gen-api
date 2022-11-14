import _metascraper, { Scraper, Metadata } from "metascraper";
import title from "metascraper-title";
import author from "metascraper-author";
import date from "metascraper-date";
import publisher from "metascraper-publisher";
import url from "metascraper-url";


import { Source } from './source';
import { IDetails } from "./details";
import axios, { AxiosError } from 'axios';
// import got from "got";
export class Article extends Source {

    metascraper: Scraper;
    metadata: Metadata;

    constructor(articleUrl: string) {
        super(articleUrl);
        this.metascraper = _metascraper([title(), author(), date(), publisher(), url()]);
    }

    private async fetchPage(url: string): Promise<string | undefined> {
        const HTMLData = axios
            .get(url)
            .then(res => res.data)
            .catch((error: AxiosError) => {
            console.error(`There was an error with ${error.config?.url}.`);
            console.error(error.toJSON());
        });
        return HTMLData;
    }
    private async getContent(): Promise<void> {
        const html = await this.fetchPage(this.url);
        const metadata = await this.metascraper({ html: html, url: this.url });
        this.metadata = metadata;
    }

    private assignMetadata(metadata: Metadata): void {
        console.log(metadata);
        this.metadata = metadata;
    }

    public extractData(): IDetails {
        this.getContent();
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
