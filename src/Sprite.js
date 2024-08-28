import { Vector2 } from "./Vector2.js";

export class Sprite {
    constructor({
        resource, // src image k vykreslení
        frameSize, // jaký frame ze sheetu vykresli..
        hFrames, // výška
        vFrames, // šířka
        frame, // aktuální frame
        scale, // měřítko
        position, // pozice
    }){
    // ?? -> pro defaultní hodnoty
    this.resource = resource;
    this.frameSize = frameSize ?? new Vector2(16,16);
    this.hFrames = hFrames ?? 1;
    this.vFrames = vFrames ?? 1;
    this.frame = frame ?? 0;
    this.frameMap = new Map();
    this.scale = scale ?? 1;
    this.position = position ?? new Vector2(0,0);
    this.buildFrameMap();
    }

    buildFrameMap(){
        let frameCount = 0;
        for (let v=0; v<this.vFrames; v++){
            for (let h=0; h<this.hFrames; h++){
                this.frameMap.set(
                    frameCount,
                    new Vector2(h * this.frameSize.x,v * this.frameSize.y)
                )
                frameCount++;
                
            }
        }
        console.log(this.resource,frameCount);
    }

    drawImage(ctx, x, y){
        if (!this.resource.isLoaded){
            return;
        }

        let frameCoordX = 0;
        let frameCoordY = 0;

        const frame = this.frameMap.get(this.frame);

        if (frame){ //bud defaultní frame nebo frame z mapy
            frameCoordX = frame.x;
            frameCoordY = frame.y;
        }

        // framesize pro daný sprite
        const frameSizeX = this.frameSize.x
        const frameSizeY = this.frameSize.y

        // vykreslení sprite
        ctx.drawImage(
            this.resource.image, // zdrojový obrázek
            frameCoordX, // x pozice frame
            frameCoordY, // y pozice frame
            this.frameSize.x, // šířka frame
            this.frameSize.y, // výška frame
            x, // x pozice - kam vložit
            y, // y pozice - kam vložit
            frameSizeX * this.scale, // šířka frame * měřítko
            frameSizeY * this.scale // výška frame * měřítko
        )
    }
}

