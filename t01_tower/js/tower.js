class Tower extends Building {
    constructor(floors, material, address) {
        super(floors, material, address);
        this.hasElevator = false;
        this.arcCapacity = 0;
        this.height = 0;
    }

    getFloorHeight() {
        return this.floors > 0 ? this.height / this.floors : 0;
    }

    toString() {
        return [
            super.toString(),
            `Elevator: ${this.hasElevator ? "+" : "-"}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Height: ${this.height}`,
            `Floor height: ${this.getFloorHeight()}`
        ].join("\n");
    }
}