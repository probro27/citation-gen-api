import { Citation } from './citation';
import { Source } from './source';
export class Apa extends Citation {
  version?: number = 7;

  constructor(source: Source, version?: number) {
    super(source);
    this.version = version;
  }

  public async getCitation(): Promise<string> {
    if (this.source.url == '') {
      console.log('returning empty');
      return '';
    }
    this.details = await this.retrieveData();
    // right now just supporting version 7 format without page numbers
    const { author, yearOfPublication, title, publisher } = this.details;
    const citation = `${author} (${yearOfPublication}), ${title}, ${publisher}, ${this.source.url}`;
    return citation;
  }
}
