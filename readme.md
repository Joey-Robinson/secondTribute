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

If you take a glance at the middle
