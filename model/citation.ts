class Citation {
    author: string;
    title: string;
    yearOfPublication?: number;
    publisher: string;
    pageNumbers?: [number, number];

    constructor(author: string, title: string, publisher: string, yearOfPublication?: number, pageNumbers?: [number, number]) {
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.yearOfPublication = yearOfPublication;
        this.pageNumbers = pageNumbers;
    }

    protected getCitation?(): string;
}
