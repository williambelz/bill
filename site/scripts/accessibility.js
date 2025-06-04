(function () {
  const contrastToggle = document.createElement('button');
  contrastToggle.textContent = 'Toggle High Contrast';
  contrastToggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
  document.body.insertBefore(contrastToggle, document.body.firstChild);
})();
