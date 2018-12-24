// API
import catFacts from "./api/catFacts";
import ffCall from "./api/finalFantasy";
import weeklyAffixes from "./api/weeklyAffixes";
import wowCharacter from "./api/wowCharacter";
// Components
import {
  resizeHeaderOnScroll,
  closeHeader,
  changeIcon
} from "./components/header";
// User
import ffResourcesList from "./user/ffResources";
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