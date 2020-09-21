import { settings } from './settings.js';
import { toggleButton } from './drawColorModeToggle.js';
import { toggleMenu } from './drawMenuToggle.js';

export const toggleColorMode = () => {

  // we do backgrounds and colors separately, since some
  // elements have transparent backgrounds

  document.querySelectorAll('*').forEach((element) => {
    if (element.classList.contains('light-mode-text')) {
      element.classList.remove('light-mode-text');
      element.classList.add('dark-mode-text');
    } else if (element.classList.contains('dark-mode-text')) {
      element.classList.remove('dark-mode-text');
      element.classList.add('light-mode-text');
    }

    if (element.classList.contains('light-mode-background')) {
      element.classList.remove('light-mode-background');
      element.classList.add('dark-mode-background');
    } else if (element.classList.contains('dark-mode-background')){
      element.classList.remove('dark-mode-background');
      element.classList.add('light-mode-background');
    }

    if (element.classList.contains('light-mode-box-shadow')) {
      element.classList.remove('light-mode-box-shadow');
      element.classList.add('dark-mode-box-shadow');
    } else if (element.classList.contains('dark-mode-box-shadow')){
      element.classList.remove('dark-mode-box-shadow');
      element.classList.add('light-mode-box-shadow');
    }

  });

  // svgs

  if (settings.colorMode === 'light') {
    toggleButton.bevel.fill('#fbfef9');
    toggleButton.button.fill('#1f1f1f').stroke('#fbfef9');
    toggleMenu.lineTop.stroke('#fbfef9');
    toggleMenu.lineBot.stroke('#fbfef9');
  } else {
    toggleButton.bevel.fill('#1f1f1f');
    toggleButton.button.fill('#fbfef9').stroke('#1f1f1f');
    toggleMenu.lineTop.stroke('#1f1f1f');
    toggleMenu.lineBot.stroke('#1f1f1f');
  }
};
