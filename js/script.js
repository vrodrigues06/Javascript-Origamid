import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimateScroll from "./modules/animate-scroll.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/navigation-tab.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimaisFetch from "./modules/animais-fetch.js";
import initFetchBtc from "./modules/fetch-btc.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

initTabNav();
initAccordion();
initAnimateScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimaisFetch();
initFetchBtc();
