# Meerkats Tribute Page

So this was a bit easier to do vs. my previous project [Sweetest Southen Creations.](https://github.com/Joey-Robinson/SweetestSouthernCreations) I knew the information I wanted, it was just a matter of relaying the information how I wanted. I picked something I felt that would match what I wanted as well as being able to present the information as neatly as possible.

# The Preparation For Wow

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

Is
