// API
// import catFacts from "./api/catFacts";
// import ffCall from "./api/finalFantasy";
// import weeklyAffixes from "./api/weeklyAffixes";
import meerkats from "./api/meerkats";
import ristretta from './api/ristretta';
// import finalFantasy from './api/finalFantasy';
// Components
import {
  resizeHeaderOnScroll,
  closeHeader,
  changeIcon
} from "./components/header";
import modalFunction from './components/modal';
// User
// import ffResourcesList from "./user/ffResources";
import favoriteCat from './user/favoriteCat';
// Pages
import landing from './pages/landing';
// const removeLocationHash = () => {
//   const noHashURL = window.location.href.replace(/#.*$/, '');
//   window.history.replaceState('', document.title, noHashURL)
// }

// window.addEventListener("popstate", (event) => {
//   event.preventDefault();
//   removeLocationHash();
// });
// window.addEventListener("hashchange", (event) => {
//   event.preventDefault();
//   removeLocationHash();
// });
// window.addEventListener("load", () => {
//   removeLocationHash();
// });