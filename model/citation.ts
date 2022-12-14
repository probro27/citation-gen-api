import { Source } from './source';
import { IDetails } from './details';
export class Citation {
  source: Source;
  details: IDetails;

  constructor(source: Source) {
    this.details = {
      author: '',
      title: '',
      publisher: '',
      yearOfPublication: 'n.d.',
      pageNumbers: [0, 0]
    };
    this.source = source;
  }

  public getCitation?(): Promise<string>;

  public async retrieveData(): Promise<IDetails> {
    console.log('retrieving data');
    let details: IDetails;
    if (this.source.extractData) {
      details = await this.source.extractData();
      console.log('retreived data successfully');
      return details;
    } else {
      console.error('retreived data failed');
      return this.details;
    }
  }
}
