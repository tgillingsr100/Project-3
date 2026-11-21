document.querySelectorAll('.dropdown__title').forEach((button) => {
  const dropdown = button.closest('.dropdown');
  const menu = document.getElementById(button.getAttribute('aria-controls'));

  const closeDropdown = () => {
    button.setAttribute('aria-expanded', 'false');
    dropdown.classList.remove('is-open');
  };

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.dropdown__title').forEach((otherButton) => {
      otherButton.setAttribute('aria-expanded', 'false');
      otherButton.closest('.dropdown').classList.remove('is-open');
    });

    button.setAttribute('aria-expanded', String(!isOpen));
    dropdown.classList.toggle('is-open', !isOpen);
    if (!isOpen) menu.querySelector('a').focus();
  });

  button.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdown();
      button.focus();
    }
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown__title').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.closest('.dropdown').classList.remove('is-open');
    });
  }
});
