const ffResources = [
  `
  <a
    href="http://garlandtools.org/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Garland Tools
  </a>
  `,
  `
  <a
    href="http://ff14angler.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Angler
  </a>
  `,
  `
  <a
    href="http://en.ff14housing.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Housing DB
  </a>
  `,
  `
  <a
    href="http://www.ffxivgardening.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Gardening
  </a>
  `,
  `
  <a
    href="https://ffxivcrafting.com/crafting"
    target="_blank"
    rel="noopener noreferrer"
  >
    Crafting as a Service
  </a>
  `,
  `
  <a
    href="http://ffxiv.ariyala.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Materia Optimizer
  </a>
  `,
  `
  <a
    href="https://nf.reddit.com/r/ffxiv/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Subreddit
  </a>
  `,
  `
  <a
    href="https://ffxivteamcraft.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Teamcraft
  </a>
  `
];

export const ffResourcesList = ffResources.map((resource) => {
  return `<li>${resource}</li>`
});