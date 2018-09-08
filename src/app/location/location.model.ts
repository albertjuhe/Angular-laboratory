export class Location {
    name: String;
    description: String;
    dateFrom: String;
    detoTo: String;
    starts: Number;
    watch: Number;
    forks: Number;
    user: String;
    url: String = 'http://35.167.24.186/travelexperience/web/app.php/';

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
