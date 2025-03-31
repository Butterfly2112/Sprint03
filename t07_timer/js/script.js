class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.count = 0;
        this.intervalId = null;
    }

    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
        this.intervalId = setInterval(() => {
            this.tick();
            this.count++;
            if (this.count >= this.stopCount) {
                this.stop();
            }
        }, this.delay);
    }

    tick() {
        const cyclesLeft = this.stopCount - this.count - 1;
        console.log(`Timer ${this.title} Tick! | cycles left ${cyclesLeft}`);
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            console.log(`Timer ${this.title} stopped`);
        }
    }
}

function runTimer(id, delay, counter) {
    const timer = new Timer(id, delay, counter);
    timer.start();
}