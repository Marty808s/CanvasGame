export class GameLoop {
    constructor(update, render) {

        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStep = 1000 / 60; // 60fps

        this.update = update;
        this.render = render;

        this.rafId = null; // requestAnimationFrameID
        this.isRunning = false; // běží?
    }
    // hlavní loop
    mainLoop = (timestamp) => {
        // pokud neběží, tak skončí
        if (!this.isRunning) {
            return;
        }
        // čas posledního snímku
        let deltaTime = timestamp - this.lastFrameTime;
        // čas od posledního snímku
        this.lastFrameTime = timestamp;
        // akumuluju čas
        this.accumulatedTime += deltaTime;

        // loop pro update
        while (this.accumulatedTime >= this.timeStep) {
            this.update(this.timeStep); // přičtu časový krok - fixed
            this.accumulatedTime -= this.timeStep;
        }

        this.render();

        this.rafId = requestAnimationFrame(this.mainLoop);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.isRunning = false;
    }
    

}