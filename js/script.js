import SmoothScroll from "./modules/smooth-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/navigation-tab.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import animaisFetch from "./modules/animais-fetch.js";
import fetchBtc from "./modules/fetch-btc.js";
import AnimateScroll from "./modules/animate-scroll.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const animateScroll = new AnimateScroll("[data-anime='scroll']");
animateScroll.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// APis externas Json
fetchBtc("https://blockchain.info/ticker", "[data-btc]");
animaisFetch("/animaisapi.json", ".numeros-grid");

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();
