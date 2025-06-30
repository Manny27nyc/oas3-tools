// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export class LoggingOptions {
    public format: string;
    public errorLimit: string | number;

    constructor(format: string, errorLimit:string | number)
    {
        this.format = format;
        this.errorLimit = errorLimit;
    }
}