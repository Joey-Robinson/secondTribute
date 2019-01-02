import {
  streamers
} from '../user/streamers';

export const modalFunction = () => {
  const openButton = document.querySelector(".wow-test");
  const wow = document.getElementById("wow");
  const closeButton = document.createElement("button");
  const modalBackdrop = document.createElement("div");
  const modal = document.createElement("div");
  const interests = document.querySelector(".wow-interests");
  modal.classList.add("modal");
  modalBackdrop.classList.add("modal-backdrop");

  const streamerList = streamers.map((streamer) => {
    return `<li>${streamer}</li>`;
  })

  modal.innerHTML = `
    <div class="modal-streamer">
    <h3>Some Of My Favorite Streamers</h3>
      <ul>
        ${streamerList.join(" ")}
      </ul>
    </div>
    <div class="modal-resources">
      <h1>Test</h1>
    </div>
  `;

  const closeModal = () => {
    modal.style.display = "none";
    modalBackdrop.style.display = "none";
  };
  openButton.classList.add("modal-openButton");
  openButton.addEventListener("click", () => {
    modal.style.display = "grid";
    modalBackdrop.style.display = "block";
  });

  closeButton.classList.add("modal-close");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", () => {
    closeModal();
  });
  modalBackdrop.addEventListener("click", closeModal);
  wow.append(modalBackdrop);
  modal.appendChild(closeButton);
  interests.appendChild(modal);
};

modalFunction();