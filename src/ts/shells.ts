const vShells = document.querySelectorAll<HTMLElement>('.shell--v');

vShells.forEach(shell => {
  const label = shell.querySelector('.js-shell-label');
  const labelText: string | null | undefined = label?.textContent;
  if (labelText && labelText.length > 4) {
    label?.setAttribute('style', 'font-size: .85rem')
  }

})
