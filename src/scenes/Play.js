import { filters, Sprite } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Sun from '../components/Sun';
import Earth from '../components/Earth';
import Stars from '../components/Stars';
import Rocket from '../components/Rocket';

export default class Play extends Scene {
  async onCreated() {
    const stars = new Stars(15);
    this.addChild(stars);
    
    const sun = new Sun();
    sun.x = 700;
    sun.y = -250;
    this.addChild(sun);

    const earth = new Earth();
    earth.x = -500;
    earth.y = 100;

    const rocket = new Rocket();
    earth.addChild(rocket);

    this.addChild(earth);

    const footer = new Footer();
    footer.x = - window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    // Honestly I have no idea how do this part
    const viewport = this.parent.parent;
    const filter = new filters.DisplacementFilter(sun._blast);
    viewport.filters = [filter];
    gsap.to(filter.scale, { x: 5, y: 5, duration: 5, repeat: -1, yoyo: true });
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
