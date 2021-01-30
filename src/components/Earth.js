import { Container, Sprite } from 'pixi.js';

export default class Earth extends Container {
  constructor() {
    super();

    this.name = 'earth';

    this._body = new Sprite.from('earth');
    this._body.anchor.set(0.5);
    this.addChild(this._body);
  }
}