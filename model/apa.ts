class Apa extends Citation {
    version?: number = 7;

    constructor(author: string, title: string, publisher: string, yearOfPublication?: number, pageNumbers?: [number, number], version?: number) {
        super(author, title, publisher, yearOfPublication, pageNumbers);
        this.version = version;
    }

    public getCitation(): string {
        return "";
    }

}
