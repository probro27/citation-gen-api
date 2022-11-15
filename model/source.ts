import { IDetails } from './details';
export abstract class Source {
  details: IDetails;
  url: string;

  constructor(url: string) {
    this.url = url;
    this.details = {
      author: '',
      title: '',
      publisher: '',
      yearOfPublication: 'n.d.',
      pageNumbers: [0, 0]
    };
  }

  public abstract extractData?(): Promise<IDetails>;
}
