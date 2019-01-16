const ffResources = [
  `
  <a
    aria-label="Link For Garland Tools"
    href="http://garlandtools.org/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Garland Tools
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy 14 Angler"
    href="http://ff14angler.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Angler
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy 14 Housing"
    href="http://en.ff14housing.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Housing DB
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy 14 Gardening Website"
    href="http://www.ffxivgardening.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Gardening
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy 14 Crafting Website"
    href="https://ffxivcrafting.com/crafting"
    target="_blank"
    rel="noopener noreferrer"
  >
    Crafting as a Service
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy Materia Optimizer"
    href="http://ffxiv.ariyala.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Materia Optimizer
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy 14 Subreddit"
    href="https://nf.reddit.com/r/ffxiv/"
    target="_blank"
    rel="noopener noreferrer"
  >
    FF14 Subreddit
  </a>
  `,
  `
  <a
    aria-label="Link For Final Fantasy 14 Teamcraft Website"
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