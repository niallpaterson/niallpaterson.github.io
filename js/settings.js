export const settings = {
  colorMode: 'light',
  menuVisible: false
};

export const updateSettings = function () {
  settings.colorMode === 'light' ? settings.colorMode = 'dark' : settings.colorMode = 'light';
};