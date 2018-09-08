export class Location {
    name: String;
    description: String;
    dateFrom: String;
    detoTo: String;
    starts: Number;
    watch: Number;
    forks: Number;
    user: String;

    constructor(name: String,
        description: String,
        dateFrom: String,
        detoTo: String,
        starts: Number,
        watch: Number,
        forks: Number,
        user: String) {

        this.name = name;
        this.description = description;
        this.dateFrom = dateFrom;
        this.detoTo = detoTo;
        this.starts = starts;
        this.watch = watch;
        this.forks = forks;
        this.user = user;

    }
}
