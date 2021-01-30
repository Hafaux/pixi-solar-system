import { Container, Sprite } from 'pixi.js';

/**
 * Class representing stars
 * @extends Container
 */
export default class Stars extends Container {
  constructor(count = 10) {
    super();

    this.starCount = count;
    this.name = 'stars';
    
    this._addStars();
  }

  /**
   * @private
   */
  _addStars() {
    for (let i = 0; i < this.starCount; i++) {
      const star = new Sprite.from('star');
      star.x = Math.random() * 1600 - 800;
      star.y = Math.random() * 800 - 500;

      const scaleFactor = Math.random() + 0.5;
      star.scale.x = scaleFactor;
      star.scale.y = scaleFactor;

      star.rotation = Math.random() - 0.5;

      this.addChild(star);
    }
  }
}