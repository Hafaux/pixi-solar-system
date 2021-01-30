import { Container, Sprite } from 'pixi.js';
import gsap from 'gsap';
import Fire from './Fire';

/**
 * Class representing a rocket
 * @extends Container
 */
export default class Rocket extends Container {
  constructor() {
    super();

    this.name = 'rocket';
    
    this.pivot.set(-350, -1);

    this._body = new Sprite.from('rocket');
    this.addChild(this._body);

    // Can't get this to work
    // this._fire = new Fire();
    this._fire = new Container();
    this.rotateRocket();
  }

  rotateRocket() {
    gsap.to(this, { rotation: -Math.PI * 2, duration: 5, repeat: -1, ease: 'linear' });
    // this._rocket.rotation = 2;
  }
}