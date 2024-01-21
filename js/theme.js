const THEME_KEY = 'THEME';
const THEME_KEY_LIGHT = 'LIGHT';
const THEME_KEY_DARK = 'DARK';

window.onload = () => {
  switch (localStorage.getItem(THEME_KEY)) {
    case THEME_KEY_DARK:
      switchButton.classList.add('on');
      body.classList.add('theme-dark');
      localStorage.setItem(THEME_KEY, THEME_KEY_DARK);
      break;
    default:
      localStorage.setItem(THEME_KEY, THEME_KEY_LIGHT);
      break;
  }
};

// theme mode toggle
const switchButton = document.getElementById('theme_switch');
const body = document.querySelector('body');
switchButton.addEventListener('click', () => {
  switch (localStorage.getItem(THEME_KEY)) {
    case THEME_KEY_LIGHT:
      switchButton.classList.add('on');
      body.classList.add('theme-dark');
      localStorage.setItem(THEME_KEY, THEME_KEY_DARK);
      break;
    case THEME_KEY_DARK:
      switchButton.classList.remove('on');
      body.classList.remove('theme-dark');
      localStorage.setItem(THEME_KEY, THEME_KEY_LIGHT);
      break;
  }
});
