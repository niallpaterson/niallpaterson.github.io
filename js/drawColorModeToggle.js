import { updateSettings } from './settings.js';
import { toggleColorMode } from './toggleColorMode.js';

/* global SVG */

export const toggleButton = {
  svgFrame: null,
  bevel: null,
  button: null,
  drawFrame() {
    this.svgFrame = SVG().addTo('#color-toggle').size(60, 50);
    return this;
  },
  drawBevel() {
    this.bevel = this.svgFrame
      .rect(40, 20)
      .center(25, 25)
      .radius(10)
      .attr({ fill: '#1F1F1F' });
    return this;
  },
  drawButton() {
    this.button = this.svgFrame
      .circle(16)
      .center(15, 25)
      .attr({ fill: '#FBFEF9' });
    return this;
  },
  addAnimateClickListener(settings) {
    this.svgFrame.click(() => {
      this.runAnimation(settings);
    });
    return this;
  },
  runAnimation(settings) {
    if (settings.colorMode === 'dark') {
      this.button
        .animate(100, 100, 'now').size(40)
        .animate(250, 0, 'after').size(10)
        .animate(300, 0, 'after').size(16)
        .animate(300, 0, 'after').center(15, 25);

      setTimeout(toggleColorMode, 100);
      setTimeout(updateSettings, 1000);
    } else {
      this.button.animate(300, 0, 'now').center(35, 25)
        .animate(100, 100, 'after').size(40)
        .animate(250, 0, 'after').size(10)
        .animate(300, 0, 'after').size(16);

      setTimeout(toggleColorMode, 400);
      setTimeout(updateSettings, 1000);
    }
    return this;
  },
};
