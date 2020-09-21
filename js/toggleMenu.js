export const toggleMenuVisibility = (settings) => {
  if (settings.menuVisible) {
    document.querySelector('nav').style.left = '-100vw';
    document.querySelector('nav ul').style.opacity = '0';
    settings.menuVisible = false;
  } else {
    document.querySelector('nav').style.left = '0';
    document.querySelector('nav ul').style.opacity = '1';
    settings.menuVisible = true;
  }
};

