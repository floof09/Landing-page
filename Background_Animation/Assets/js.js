window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    for (let index = 0; index < 2000; index++) {
      const element = document.createElement('span');
      container.appendChild(element);
    }
  });
  