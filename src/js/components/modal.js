export const modalFunction = () => {
  const openButton = document.querySelector('.wow-test');
  const closeButton = document.createElement('button');
  const modalBackdrop = document.createElement('div');
  const modal = document.createElement('div');
  const interests = document.querySelector('.wow-interests');
  modal.classList.add('modal');
  modalBackdrop.classList.add('modal-backdrop');
  modal.innerHTML = `<h1>Hi</h1>`
  const closeModal = () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
  }
  openButton.classList.add('modal-openButton');
  openButton.addEventListener('click', () => {
    modal.style.display = 'grid';
    modalBackdrop.style.display = 'block';
  });

  closeButton.classList.add('modal-close');
  closeButton.innerText = 'Close';
  closeButton.addEventListener('click', () => {
    closeModal();
  });
  modalBackdrop.addEventListener('click', closeModal);
  modalBackdrop.appendChild(closeButton);
  modal.appendChild(modalBackdrop);
  modal.appendChild(closeButton);
  interests.appendChild(modal);
}

modalFunction();