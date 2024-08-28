import './style.css'
import { resources } from './src/Resources.js'
import { Sprite } from './src/Sprite.js'
import { Vector2 } from './src/Vector2.js'
import { GameLoop } from './src/GameLoop.js'
import { Input, UP, DOWN, LEFT, RIGHT } from './src/Input.js'

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext('2d');

if (!canvas || !ctx) {
    console.error("Canvas or ctx not found");
}

const skySprite = new Sprite({
    resource: resources.images.sky,
    frameSize: new Vector2(320, 180),
});

const shadowSprite = new Sprite({
    resource: resources.images.shadow,
    frameSize: new Vector2(32,32)
});



const heroSprite = new Sprite({
    resource: resources.images.hero,
    hFrames: 3,
    vFrames: 8,
    frameSize: new Vector2(32,32),
    frame: 1,
});

const heroPos = new Vector2((heroSprite.frameSize.x / 2) * 5, (heroSprite.frameSize.y / 2) *5);
const input = new Input();


const update = () => {
    console.log(input.direction);
    if (input.direction === UP) {
        heroPos.y -= 1;
        heroSprite.frame = 6;
    }
    if (input.direction === DOWN) {
        heroPos.y += 1;
        heroSprite.frame = 0;
    }
    if (input.direction === LEFT) {
        heroPos.x -= 1;
        heroSprite.frame = 9;
    }
    if (input.direction === RIGHT) {
        heroPos.x += 1;
        heroSprite.frame = 3;
    }
}



const groundSprite = new Sprite({
    resource: resources.images.ground,
    frameSize: new Vector2(320,180),
});


const draw = () => {

    //Hero offset? - ve videu je?
    skySprite.drawImage(ctx, 0, 0);
    groundSprite.drawImage(ctx, 0, 0);
    shadowSprite.drawImage(ctx, heroPos.x, heroPos.y);
    heroSprite.drawImage(ctx, heroPos.x, heroPos.y);

}


const gameLoop = new GameLoop(update,draw);
gameLoop.start();




