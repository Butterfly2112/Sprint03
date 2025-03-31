export default class HardWorker{
    constructor() {
        this._name = "";
        this._age = 1;
        this._salary = 100;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        if (value < 100 && value >= 1) {
            this._age = value;
        }
    }

    set salary(value) {
        if (value < 10000 && value >= 100) {
            this._salary = value;
        }
    }

    toObject() {
        return {
            name: this._name,
            age: this._age,
            salary: this._salary
        };
    }
}