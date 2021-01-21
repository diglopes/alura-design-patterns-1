export enum FORMAT {
    xml = "xml",
    csv = "csv",
    percentage = "percentage"
}

export class Request {
    constructor(private format: FORMAT) {}

    public getFormat(): FORMAT {
        return this.format
    }
}