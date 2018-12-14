const openButton = document.createElement('button');
const closeButton = document.createElement('button');
const modalBackdrop = document.createElement('div');
const modal = document.createElement('div');

modal.classList.add('modal');
modalBackdrop.classList.add('modal-backdrop');

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