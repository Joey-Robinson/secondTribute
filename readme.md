# Meerkats | Ristretta - Gamer Vanity Site.

## Tools
- webpack
- babel
- npm scripts
- scss
  - postcss
- imagemin
- lazysizes
- Intersection Observer

### Usage Of Tools
1. webpack and babel:
  - Using webpack and babel, I wanted to use ES6+ features when writing JavaScript, and then transpile those features & code down to browser friendly JavaScript. First with webpack. I use webpack to bundle from src/index.js down to dist/js/bundle.js. In conjunction with babel, which transpiles ES6 to older, more readable JavaScript, I was able to write more modern JavaScript without fear of it not working on older browsers

2. npm scripts
  - Using npm scripts I was able to execute commands in the terminal, such as build my scss into css, start a css version of the project, build my JavaScript, and start a JavaScript version of the project, just to name a few.

3. scss & postcss
  - Using scss & postcss, I was able to have a more efficient workflow with my design work and layout. Scss allowed me all the benefits you would expect. Global variables, nested selectors, and modularity. This (scss) coupled with npm scrpts & postcss, I was able to create a build script to prefix all css once it was built. Meaning that newwer features could have a fallback with a given prefix to allow them to work properly.

4. imagemin
  - Using imagemin I was able to firstly optimize any image and then convert that image into the webp format by triggering a build in the terminal. This would take the images from a given folder inside of the project and output, in another folder, the same images, only compressed and converted to webp format.

5. lazysizes
  - Using lazysizes, I was able to lazy load a majority of the images in this project. Since I have a lot of images here, I wanted to defer loading so the project didn't have long load times.

6. Intersection Observer
  - This was a new tool for me to use. What this does is similar to other lazy loading libraries. The function checks to see if a given image has the class of 'lazy' or not. If it does, the image isn't loaded until it comes into the viewport. I used primarily for background images. Since I couldn't directly defer loading on those, I had to look for a way to lazy load them, and I came across this.

## Install & Usage

To use this, first, you need to clone or download the repo above. Once you've done that, you'll need to open a terminal in that directory and type the following:

```javascript
npm install
```

Once you've isntalled the dependencies, you can either type one of the following commands in the terminal

```javascript
npm start
```

Or

```javascript
npm run cssStart
```

The first one will rely on JavaScript changes, while the second focuses on css changes. The second one also has hot or live reloading, meaning it will refresh on save/change in your css.
