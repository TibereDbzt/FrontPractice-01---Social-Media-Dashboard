import 'normalize.css';
import '../styles/main.sass';

const switchTheme = () => {
  document.getElementById('switch-btn').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('light');
    document.querySelector('body').classList.toggle('dark');
    if (document.querySelector('body').classList.contains('light')) {
      document.getElementById('switcher-label').textContent = 'Dark Mode';
    } else {
      document.getElementById('switcher-label').textContent = 'Light Mode';
    }
  });
};

document.addEventListener('DOMContentLoaded', () => switchTheme());
