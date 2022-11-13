class Apa extends Citation {
    version?: number = 7;

    constructor(url: string, version?: number) {
        super(url);
        this.version = version;
    }

    public getCitation(): string {
        return "";
    }

}
