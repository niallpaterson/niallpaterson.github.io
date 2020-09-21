import { toggleMenu } from './drawMenuToggle.js';
import { toggleButton } from './drawColorModeToggle.js';
import { settings } from './settings.js';

window.onload = () => {
  toggleButton.drawFrame().drawBevel().drawButton().addAnimateClickListener(settings);
  toggleMenu.drawFrame().drawLineTop().drawLineBot().addAnimateClickListeners(settings);
};
