import _metascraper, { Scraper, Metadata } from 'metascraper';
import title from 'metascraper-title';
import author from 'metascraper-author';
import date from 'metascraper-date';
import publisher from 'metascraper-publisher';
import url from 'metascraper-url';

import { Source } from './source';
import { IDetails } from './details';
import axios, { AxiosError } from 'axios';
// import got from "got";
export class Article extends Source {
  metascraper: Scraper;
  metadata: Metadata;

  constructor(articleUrl: string) {
    super(articleUrl);
    this.metascraper = _metascraper([
      title(),
      author(),
      date(),
      publisher(),
      url()
    ]);
  }

  private async fetchPage(url: string): Promise<string | undefined> {
    const HTMLData = axios
      .get(url)
      .then((res) => res.data)
      .catch((error: AxiosError) => {
        console.error(`There was an error with ${error.config?.url}.`);
        console.error(error.toJSON());
      });
    return HTMLData;
  }
  private async getContent(): Promise<void> {
    const html = await this.fetchPage(this.url);
    const metadata = await this.metascraper({ html: html, url: this.url });
    this.assignMetadata(metadata);
  }

  private assignMetadata(metadata: Metadata): void {
    this.metadata = metadata;
  }

  public async extractData(): Promise<IDetails> {
    await this.getContent();
    const details: IDetails = {
      author:
        this.metadata.author != 'null'
          ? this.metadata.author
          : this.details.author,
      title:
        this.metadata.title != 'null'
          ? this.metadata.title
          : this.details.title,
      publisher:
        this.metadata.publisher != 'null'
          ? this.metadata.publisher
          : this.details.publisher,
      yearOfPublication:
        this.metadata.date != 'null'
          ? this.metadata.date
          : this.details.yearOfPublication
    };
    this.details = details;
    return this.details;
  }
}
