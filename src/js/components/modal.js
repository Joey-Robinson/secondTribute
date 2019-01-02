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
    <h3>Favorite Streamers</h3>
      <ul>
        ${streamerList.join(" ")}
      </ul>
    </div>
    <div class="modal-resources">
      <h3>Favorite Resrouces</h3>
        <ul>
          <li>
            <a
              href="https://questionablyepic.com/restodruid-catweaving/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Catweaving
            </a>
          </li>
          <li>
            <a
              href="../../src/images/ui.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Playing With My UI
            </a>
          </li>
          <li>
            <a
              href="https://www.warcraftlogs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reviewing Warcraft Logs
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Checking Wowhead
            </a>
          </li>
          <li>
            <a
              href="http://www.wow-petopia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Looking At Tamable Pets
            </a>
          </li>
          <li>
            <a 
              href="https://wow.curseforge.com/addons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keeping Addons Updated
            </a>
          </li>
          <li>
            <a
              href="https://raider.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Researching Mythic Plus
            </a>
          </li>
        </ul>
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