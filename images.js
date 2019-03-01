const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

// Usage: In the terminal, direct yourself to the root directory
// Type in the following:
//                     node images.js
// a folder titled compressed will be created in the src/ directory

imagemin(['./src/images/*'], './src/compressed', {
  use: [imageminWebp({ quality: 100 })]
}).then(() => {
  console.log('Done!');
});