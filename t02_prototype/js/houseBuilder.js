const houseBlueprint = {
    _building_speed: 0.5,

    getDaysToBuild() {
        return this.size / this._building_speed;
    }
};

function HouseBuilder(address, description, owner, size, roomCount) {
    this.address = address;
    this.date = new Date();
    this.description = description;
    this.owner = owner;
    this.size = size;
    this.roomCount = roomCount;

    this._averageBuildSpeed = 0.5;
    this._building_speed = 0.5;
}

HouseBuilder.prototype = Object.create(houseBlueprint);
HouseBuilder.prototype.constructor = HouseBuilder;