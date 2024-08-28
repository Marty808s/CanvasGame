export const LEFT = 'LEFT';
export const RIGHT = 'RIGHT';
export const UP = 'UP';
export const DOWN = 'DOWN';


export class Input {
    constructor() {
        this.heldDirections = [];
        document.addEventListener("keydown", (event) => {
            //console.log(event.key);
            if (event.code === "ArrowUp" || event.code === "KeyW") {
                this.onArrowPressed(UP);
            }
            if (event.code === "ArrowDown" || event.code === "KeyS") {
                this.onArrowPressed(DOWN);
            }
            if (event.code === "ArrowLeft" || event.code === "KeyA") {
                this.onArrowPressed(LEFT);
            }
            if (event.code === "ArrowRight" || event.code === "KeyD") {
                this.onArrowPressed(RIGHT);
            }
        });

        document.addEventListener("keyup", (event) => {
            //console.log(event.key);
            if (event.code === "ArrowUp" || event.code === "KeyW") {
                this.onArrowReleased(UP);
            }
            if (event.code === "ArrowDown" || event.code === "KeyS") {
                this.onArrowReleased(DOWN);
            }
            if (event.code === "ArrowLeft" || event.code === "KeyA") {
                this.onArrowReleased(LEFT);
            }
            if (event.code === "ArrowRight" || event.code === "KeyD") {
                this.onArrowReleased(RIGHT);
            }
        });
    }


    get direction() {
        return this.heldDirections[0];
    }

    onArrowPressed(direction) {
        if (this.heldDirections.indexOf(direction) === -1) {
            this.heldDirections.unshift(direction);
        }
    }

    onArrowReleased(direction) {
        const index = this.heldDirections.indexOf(direction);
        if (index === -1) {
            return;
        }
        this.heldDirections.splice(index, 1);
    }
}