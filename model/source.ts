class Source {
    details: IDetails;
    url: string;

    constructor(url: string) {
        this.url = url;
        this.details.author = "";
        this.details.title = "";
        this.details.publisher = "";
        this.details.yearOfPublication = 0;
        this.details.pageNumbers = [0, 0];
    }

    protected extractData?(): IDetails;
}
