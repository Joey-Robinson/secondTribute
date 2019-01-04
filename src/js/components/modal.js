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
    <div class="modal-activities">
      <h3>Favorite Activities</h3>
        <ul>
          <li>
            <a
              href="https://theunderminejournal.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Talking To Goblins
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
    <div class="modal-classes">
      <h3>Favorite Characters</h3>
        <ul>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/zuljin/Ristretta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ristretta - Mistweaver Monk
            </a>
          </li>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/zuljin/Meerkatz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meerkatz - Restoration Druid
            </a>
          </li>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/zuljin/Meowkats"
              target="_blank"
              rel="noreferrer"
            >
              Meowkats - Beast Master Hunter
            </a>
          </li>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/stormrage/Meerlocks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meerlocks - Affliction Warlock
          </li>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/zuljin/Merekats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Merekats - Holy/Prot Paladin
            </a>
          </li>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/illidan/Orphea"
              target="_blank"
              rel="noopener noreferrer"
            >
              Orphea - Rogue
            </a>
          </li>
          <li>
            <a
              href="https://worldofwarcraft.com/en-us/character/zuljin/Meerkatz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meerkatz - Balance Druid
            </a>
          </li>
        </ul>
      </div>
      <div class="modal-favorites">
        <h3>Favorite Dungeons</h3>
          <ul>
            <li>
              <a
                href="https://www.wowhead.com/court-of-stars"
                target="_blank"
                rel="noopener noreferrer"
              >
                Court Of Stars
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/the-arcway"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Arcway
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/the-underrot"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Underrot
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/eye-of-azshara-dungeon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Eye Of Azshara
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/halls-of-valor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Halls Of Valor
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/temple-of-sethraliss"
                target="_blank"
                rel="noopener noreferrer"
              >
                Temple Of Sethraliss
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/waycrest-manor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Waycrest Manor
              </a>
            </li>
          </ul>
      </div>
      <div class="modal-mounts">
        <h3>Favorite Mounts</h3>
        <ul>
          <li>
            <a
              href="https://www.wowhead.com/item=84101/reins-of-the-grand-expedition-yak"
              target="_blank"
              rel="noopener noreferrer"
            >
              Grand Expedition Yak
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/item=87789/reins-of-the-blonde-riding-yak"
              target=_"blank"
              rel="noopener noreferrer"
            >
              Blonde Riding Yak
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/item=131734/spirit-of-echero"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spirits of Eche'ro
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/item=163644/swift-albino-raptor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Swift Albino Raptor
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/spell=90619/fossilized-raptor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fossilized Raptor
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/item=65891/vial-of-the-sands"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vial Of The Sands
            </a>
          </li>
          <li>
            <a
              href="https://www.wowhead.com/item=163042/reins-of-the-mighty-caravan-brutosaur"
              target="_blank"
              rel="noopener noreferrer"
            >
              Other people's Brutosaur
            </a>
          </li>
        </ul>
      </div>
      <div class="modal-transmog">
        <h3>Favorite Transmog</h3>
          <ul>
            <li>
              <a
                href="https://www.wowhead.com/transmog-set=1605/vestments-of-the-haunted-forest-heroic-recolor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Druid - Haunted Forest
              </a>
            </li>
            <li>
              <a
                href="https://worldofwarcraft.com/en-us/character/zuljin/Ristretta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monk - Custom Monk Set
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/transmog-set=2208/garb-of-the-astral-warden-mythic-recolor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Druid - Astral Warden
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/transmog-set=2151/vindictive-gladiators-dragonhide-armor-horde-recolor"
                target="_blank"
                rel="noopener norferrer"
              >
                Druid - Dragonhide Armor
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/transmog-set=2016/oathclaw-wargarb-mythic-recolor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Druid - Oathclaw Wargarb
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/transmog-set=717/brutal-gladiators-chain-armor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hunter - Chain Armor
              </a>
            </li>
            <li>
              <a
                href="https://www.wowhead.com/transmog-set=1438/vestments-of-the-red-crane-heroic-recolor"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monk - Red Crane
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