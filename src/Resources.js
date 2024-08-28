import sky_img from '/sprites/sky.png';
import ground_img from '/sprites/ground.png';  
import hero_img from '/sprites/hero-sheet.png';
import shadow_img from '/sprites/shadow.png';

class Resources {
    constructor() {
        // Obrazky k načtení
        this.toLoad = {
            sky: sky_img,
            ground: ground_img,
            hero: hero_img,
            shadow: shadow_img,
        }
        this.images = {};
        
        // Načtu obrázky
        let imageCounter = 0;
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
                console.log("Image " + key + " loaded");
                console.log(this.images[key]);
                imageCounter++;
                if (imageCounter === Object.keys(this.toLoad).length) {
                    console.log("All images loaded");
                    console.log(this.images);
                }
            }
        })
    }
}

export const resources = new Resources();