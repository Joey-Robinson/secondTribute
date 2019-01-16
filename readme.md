# Tools Used

1. Webpack
2. Babel
3. UglifyJS
4. SCSS
5. npm scripts
6. netlify
7. [Google Auditor](https://web.dev/measure)

Starting from the top

- I used webpack & babel together to compile and bundle my index.js file into bundle.js. I did this so I could use modern features, without comprimising my usability.
- In addition to the two tools listed above, I used uglify.js to minify my bundle.js into bundle.min.js, and give myself a small performance increase.

SCSS

- I wanted to use something other than vanilla CSS to design everything here. I also am a _HUGE_ fan of modular/component based coding. Additionally, I've used SCSS for about a year now and feel comfortable with it. Though I'm sure I'm not using it to its fullest potential

npm scripts

- I just needed a task runner. I've never used gulp or grunt and I didn't feel the need to learn or know either at this time when I have access to npm scripts.

netlify

- Free https hosting and automated building when I push. What a glorious tool

Google Auditor

- I wanted to always check and see if I forgot some key thing, and this does a good job at doing that, for the most part

# Meerkats Tribute Page

So this was a bit easier to do vs. my previous project [Sweetest Southen Creations.](https://github.com/Joey-Robinson/SweetestSouthernCreations) I knew the information I wanted, it was just a matter of relaying the information how I wanted. I picked something I felt that would match what I wanted as well as being able to present the information as neatly as possible.

# The Preparation For Wow

Going into this I had a general idea of how I wanted this section to be presented. Or at least, after the first iteration I did. I wanted there to be information that was readily avaliable to the user without having to check other sources, or at the very least, it links to that information so the user can check for themselves.

First, I needed to find if the information I wanted was readily available to me. Fortunately, it was. First, I started by looking through the [Raider.io API](https://raider.io/api) to see what data I could pull. This API was incredible in terms of the data I was able to pull from it. Ranging from a few things such as:

1. Recent Mythic Plus
2. Best Mythic Plus
3. A direct link to the user's Raider.io profile.

With that knowledge in hand, I set out to present the information how I wanted. I had originally wanted to present half of the infromation that's present (excluding the modal) on the site. So I set out to do just that, but really wasn't happy with the results. The information present felt incredibly forced when trying to read it. I persisted and kept that iteration for a bit until I became very unsatisfied with what I was doing and decided to scrap the entire layout.

From that point, I deced to try something a bit different. Instead of showcasing the inforation of 1 character, I decided to instead present the information of 2, while doing parallel API calls to slightly different endpoints. This worked out _MUCH_ better than I had anticipated. I was happy to use this as it was more inline with what I wanted and being able to run parallel calls was new to me, so it was very exciting.

Concerning the layout of the #wow section, instead of being foreful and using say, a UL or multiple divs, I instead used a table for each area of the section. To give an example:

```javascript
const recentInner = recentPlus.map((dungeon, index) => {
  return `
    <table>
      <tr>
        <td>
          <a
            aria-label="Link For Recent Mythic Plus Number ${index}"
            href=${dungeon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            + ${dungeon.num_keystone_upgrades}
            ${dungeon.dungeon} &hybull;
            ${dungeon.mythic_level}
          </a>
        </td>
      </tr>
    </table>
  `;
});
```

The above is a snippet taken directly from meerkats.js to give an example of how the data is presented. Each area is similar to that, with a table layout and data being interpolated via \${}. Overall I'm happy with how this section turned out.

## The WoW Modal

Since I made the decision to present the information like I did, I needed another way of squeezing information in a tight area. The best solution I could think of was a modal. This particular modal occupies (when activated)
92vh and 95vw. This was to have the user immersed when activating it, while still giving them an option to click the backdrop to close the Modal if they wanted to. Looking at the Modal itself shows that I even had limited space to utilize here. So I had to pick what I wanted very carefully, but knew that I could present it well with CSS Grid.

When the open button (link) is clicked, the browser is centered on the #wow section and also opens the Modal to a plethora of infromation. Each section here is a favorite X of the user. Example: Favorite Streamers. Each section here is inside one of the Modal's grid sections:

```css
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr 1fr 5rem;
```

Here you can see how the information is presented. 3 Columns with a width of 1fr, 2 Rows with a height of 1fr and 1 Row with a height of 5rem (this is for the close button). I had to gather as much information as I could knowing my limitations anud then present it accordingly, which I do feel like I did.

### Wow Ending

Overall I feel happy about how the information is presented and represented. I'm especially happy that I was able to heavily use JavaScript here to showcase that information. If I could or if I were to redo this section, I would probably have a tad bit more information between the two areas so I could maybe showcase something else there. Not entirely sure what, but the option would be nice.

# Final Fantasy Section

Unlike the WoW section, here I wanted something silly and playful. The feeling of being overwhelmed but not to the point where it's a detriment to the user experience. Similar to the WoW section, I used a [third party api](https://xivapi.com/) to make my call and pull the information. If you look, this section seems to be overly cluttered without much sense, but you can draw contrasts between this and the wow section.

Here, I don't think using a table layout was a good idea. What I did instead was this:

```javascript
primary.innerHTML = `
  <h1>A Bit About Me:</h1>
    <h3>Name: 
      <a
        aria-label="Lodestone Link For Meerkats Comparthe"
        href=${armory}
        target="_blank"
        rel="noopener noreferrer"
      >
        ${name}
      </a>
    </h3>
    <h3>Birthday: ${birthday}</h3>
    <h3>Server: ${server}</h3>
    <h3>Free Company: 
      <a
        aria-label="Lodestone Link For The Last Homely House"
        href=${freeCompany}
        target="_blank"
        rel="noopener noreferrer"
      >
        The Last Homely House
      </a>
    </h3>
    <h3>Favorite NPC Race: 
      <a
        aria-label="Link For Final Fantasy Wiki For Moogles"
        href=${moogles}
        target="_blank"
        rel="noopener noreferrer"
      >
        Moogles!
      </a>
    </h3>
    <h3>Favorite Playable Race:
      <a
        aria-label="Link For Final Fantasy Wiki For Miqote" 
        href=${miqote}
        target="_blank"
        rel="noopener noreferrer"
      >
        Female Miq'ote
      </a>
    </h3>
    <h3>Current Look:
      <br />
      <a
        aria-label="Link For Current Look Image"
        href=${portrait}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="lazyload" data-src="${portrait}" alt="Current Look In Final Fantasy 14"/>
      </a>
    </h3>
  `;
```

I used several heading tags to present the information on the far left (again, using CSS Grid) so it was more 'in your face' or more presentable, I should say.

## Final Fantasy - The Middle

If you take a glance at the middle, you can see 3 areas. Each area is its own .js file following this layout:

```javascript
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

export const ffResourcesList = ffResources.map(resource => {
  return `<li>${resource}</li>`;
});
```

Each file follows this format. Data -> map -> return then it's exported and joined into the primary final fantasy section. Similar to the WoW Modal, I needed to gather the information for this area then present it as best as I could. My only complaint is that below this middle area, I have a gap that I had wanted to use for an image, but it didn't flow well with everything around it, so I had opted not to use it.

## Final Fantasy - The Right

This was an interesting area to tackle. First, let me give some context. Each area on the right has a file specificed for it that follows this format:

```javascript
export const finalFantasyMounts = {
  behemoth: "../images/behemoth.png",
  blissful_kamuy: "../images/blissful_kamuy.png",
  cloud_mallow: "../images/cloud_mallow.png",
  dark_lanner: "../images/dark_lanner.png",
  demonic_lanner: "../images/demonic_lanner.png",
  fat_chocobo: "../images/fat_chocobo.png",
  ixion: "../images/ixion.png",
  mikoshi: "../images/mikoshi.png",
  mychocobo: "../images/mychocobo.png",
  original_fat_chocobo: "../images/original_fat_chocobo.png",
  rose_lanner: "../images/rose_lanner.png",
  sophic_lanner: "../images/sophic_lanner.png",
  twintania: "../images/twintania.png",
  tyrannosaur: "../images/tyrannosaur.png",
  zu: "../images/zu.png"
};
```

So, why an object and not an array? I wanted to use the key value of the object for a couple of things, like this:

```javascript
for (const mountImage in mounts) {
  ffMounts.innerHTML += `<img class="lazyload" data-src=${
    mounts[mountImage]
  } alt="Favorite Mount ${mountImage}" />`;
}
```

Here, I'm using the key value as part of the alt tag, as well as a descriptor for the image. Using this for loop (this was the only way I was able to do this) I was able to present the information how I wanted.

The problem here, and one I'll avoid making in the future, is that using this method sets me up for failure. When using this, I'm unable to return a li inside of a UL, and instead have to return (into a UL) the images themselves. In order to achieve this, I went into the CSS and did this:

```css
& ul {
  color: $druidOrange;
  font-size: 2.5rem;
  columns: 2;
}
```

I changed the amount of columns to give the illusion of a small list, but in reality, as I mentioned, it's only images in each section.

If I were to recreate this, I 100% would use a different approach to this, so I don't shoot myself in the foot like I did. While I accomplished what I wanted, I feel I could have approached it better with more thought. Even if the result was interesting.

## Final Fantasy - The Bottom

This was interesting to me. Each section has an empty grid area around of 2rem. So what I wanted to do, was place the gif in the area, but not in the syntax. To do this, I placed it inside of one of the empty areas surrounding each section see here:

```css
&-testing {
  position: absolute;
  left: 0;
  top: 288%;
  grid-row: 6;
  justify-self: left;
  z-index: 3;
}
```

So I had to find some exact positioning with this, which I know isn't ideal, but I felt like I accomplished what I set out to do. This again loops back to the middle section being left empty (not because this specifically, but it added to what I spoke about above).

# Favorite Cat

Following the themes of the other sections I wanted simplicity. I had originally made a large object to pull data from to simulate an API call, but I felt like that was too much for no reason (don't reinvent the wheel or something) so I dropped it, and just put static data in instead.

Since (sadly) there's not an API I know of that allows access to Maine Coon information, I made the decision to keep this area light. So this section of the Readme will also be light. The only real standout here is the fatcat gif to the side. It's cute.

#Catfacts

Sadly, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) is a thing. I don't know how to enable this as of yet, but, I will give a walk through of what I had in mind so you (the reader) can get an idea of what I wanted to do.

```javascript
export const catFacts = async () => {
  const response = await fetch("https://catfact.ninja/facts?limit=500");
  const data = await response.json();
  const catList = document.querySelector(".catfacts-list");
  const catData = data.data.map(text => {
    return `<li><strong>${text.fact}</strong></li>`;
  });
  catData.sort(() => 0.25 - Math.random());
  catList.innerHTML = catData.join(" ");
  console.log(data);
};

catFacts();
```

Simply using map -> return -> join to combine the information I wanted. The list (as you can see in the fetch request) is querying 500 results, which wasn't a problem because of this:

```css
.catfacts {
  grid-row: 10 / -1;
  grid-column: 1;
  display: grid;
  grid-template-rows: 6rem max-content;
  grid-template-columns: 1fr;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));

  &-primary {
    grid-row: 2;
    grid-column: 1;
    justify-self: center;
    height: 100%;

    & ul {
      columns: 3;
      font-size: 2rem;
      color: $druidOrange;
      padding: 1rem 2.5rem 1.5rem 2.5rem;
      overflow: hidden;

      & li {
        padding: 7px 0 7px 0;
        transition: all 0.2s ease-out;

        &:hover {
          font-size: 2rem;
          padding: 5px 2rem 5px 2rem;
          transition: all 0.2s ease-in;
          transform: scale(1.1);
          z-index: 3;
          background: darken($primaryColor, 0.5);
          position: relative;
        }
      }
    }
  }
}
```

If you look, you can see that I'm placing the content into row 10 / -1, meaning that this div will continue to be filled indefinitely. Again, I wasn't able to to this because of CORS, which I don't know how to deal with currently (or at least, not when I'm exporting it to be bundled).
