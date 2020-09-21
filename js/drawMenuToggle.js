import { toggleMenuVisibility } from './toggleMenu.js';

/* global SVG */

export const toggleMenu = {
  svgFrame: null,
  lineTop: null,
  lintBot: null,
  drawFrame() {
    this.svgFrame = SVG().addTo('#menu-toggle').size(50, 50);
    return this;
  },
  drawLineTop() {
    this.lineTop = this.svgFrame
      .line(10, 20, 40, 20);
    
    this.lineTop.stroke(
      { color: '#1F1F1F', width: 2, linecap: 'round' }
    );
    return this;
  },
  drawLineBot() {
    this.lineBot = this.svgFrame
      .line(10, 35, 40, 35);
      
    this.lineBot.stroke(
      { color: '#1F1F1F', width: 2, linecap: 'round' }
    );
    return this;
  },
  addAnimateClickListeners(settings) {
    // animate menu if click menu
    this.svgFrame.click(() => {
      this.runAnimation(settings);
      toggleMenuVisibility(settings);
    });
    // animate menu if click nav links
    document.querySelectorAll('nav a').forEach(element => {
      element.addEventListener('click', () => {
        toggleMenu.runAnimation(settings);
        toggleMenuVisibility(settings);
      });
    });
    return this;
  },
  runAnimation(settings) {
    if (settings.menuVisible) {
      this.lineTop
        .animate(400, 0, 'now').plot([[12, 15], [38, 27]])
        .animate(1000, 100, 'after').plot([[10, 20], [40, 20]]);
      this.lineBot
        .animate(400, 100, 'now').plot([[38, 20], [12, 35]])
        .animate(1000, 100, 'after').plot([[10, 35], [40, 35]]);
    } else {
      this.lineTop
        .animate(400, 0, 'now').plot([[12, 15], [38, 27]])
        .animate(1000, 100, 'after').plot([[37.5, 12.5], [12.5, 37.5]]);
      this.lineBot
        .animate(400, 0, 'now').plot([[38, 20], [12, 35]])
        .animate(1000, 100, 'after').plot([[12.5, 12.5], [37, 37.5]]);
    }
    return this;
  }
};


  
