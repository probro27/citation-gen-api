class Citation {
    url: string;
    details: IDetails;

    constructor(url: string) {
        this.details.author = "";
        this.details.title = "";
        this.details.publisher = "";
        this.details.yearOfPublication = 0;
        this.details.pageNumbers = [0, 0];
        this.url = url;
    }

    protected getCitation?(): string;

    public retrieveData(): IDetails {
        console.log('retrieving data');
        return this.details;
    }
}
