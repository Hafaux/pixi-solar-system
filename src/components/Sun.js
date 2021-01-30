import { Container, Sprite, BLEND_MODES } from 'pixi.js';
import gsap from 'gsap';

/**
 * Class representing the Sun
 * @extends Container
 */
export default class Sun extends Container {
  constructor() {
    super();

    this.name = 'sun';

    this._body = new Sprite.from('sun');

    this._blast = new Sprite.from('sun-blast');
    this._glowTop = new Sprite.from('sun-glow');
    this._glowTop.blendMode = BLEND_MODES.SCREEN;

    this._glowBottom = new Sprite.from('sun-glow');
    this._glowBottom.blendMode = BLEND_MODES.SCREEN;

    this._addSun();
  }

  /**
   * @private
   */
  _addSun() {
    this._body.anchor.set(0.5);
    this._glowBottom.anchor.set(0.5);
    this._glowTop.anchor.set(0.5);
    this._blast.anchor.set(0.5);

    const glowScale = 0.7;
    this._glowBottom.scale.x = glowScale;
    this._glowBottom.scale.y = glowScale;
    this._glowTop.scale.x = glowScale;
    this._glowTop.scale.y = glowScale;
    
    gsap.to(this._glowBottom.scale, { x: 1.5, y: 1.5, duration: 5, repeat: -1, yoyo: true, ease: 'power1.inOut' });
    gsap.to(this._glowTop.scale, { x: 1, y: 1, duration: 5, repeat: -1, yoyo: true, ease: 'power1.inOut' });

    this.addChild(this._glowBottom);
    this.addChild(this._body);
    this.addChild(this._glowTop);
    this.addChild(this._blast);
  }
}