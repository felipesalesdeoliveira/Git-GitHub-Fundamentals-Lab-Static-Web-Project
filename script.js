const toggleButton = document.getElementById('toggleTheme');

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}
