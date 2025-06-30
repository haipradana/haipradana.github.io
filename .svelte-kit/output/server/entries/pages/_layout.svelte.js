import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
import { I as Icon, G as Github } from "../../chunks/github.js";
import { L as Linkedin, M as Mail } from "../../chunks/mail.js";
import { T as Twitter } from "../../chunks/twitter.js";
const createThemeStore = () => {
  const { subscribe: subscribe2, set, update } = writable("light");
  return {
    subscribe: subscribe2,
    // Initialize theme from localStorage or default to light
    init: () => {
    },
    // Toggle between light and dark
    toggle: () => {
      update((currentTheme) => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        return newTheme;
      });
    },
    // Set specific theme
    setTheme: (theme2) => {
      set(theme2);
    }
  };
};
const theme = createThemeStore();
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Moon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "moon" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Sun = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "sun" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentPath;
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  currentPath = $page.url.pathname;
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `<header class="sticky top-0 z-50 bg-white/80 dark:bg-dark-custom/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"><div class="max-w-3xl lg:max-w-4xl mx-auto px-6 lg:px-8"><div class="flex items-center justify-between h-12 lg:h-14"> <a href="/" class="py-1 sm:py-2 lg:py-3">${$theme === "dark" ? `<img src="/images/logodana-dark.png" alt="Pradana Logo" class="h-8 sm:h-7 lg:h-8 w-auto">` : `<img src="/images/logodana-light.png" alt="Pradana Logo" class="h-8 sm:h-7 lg:h-8 w-auto">`}</a>  <nav class="hidden md:flex items-center space-x-8 lg:space-x-10 xl:space-x-12"><a href="/" class="${"text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors " + escape(
    currentPath === "/" ? "text-gray-900 dark:text-gray-100 font-medium" : "",
    true
  )}">About</a> <a href="/portfolio" class="${"text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors " + escape(
    currentPath.startsWith("/portfolio") ? "text-gray-900 dark:text-gray-100 font-medium" : "",
    true
  )}">Projects</a> <a href="/contact" class="${"text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors " + escape(
    currentPath === "/contact" ? "text-gray-900 dark:text-gray-100 font-medium" : "",
    true
  )}">Reach me!</a></nav>  <div class="flex items-center space-x-3 lg:space-x-4"><button class="p-2 lg:p-3 xl:p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">${$theme === "dark" ? `${validate_component(Sun, "Sun").$$render(
    $$result,
    {
      class: "w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
    },
    {},
    {}
  )}` : `${validate_component(Moon, "Moon").$$render(
    $$result,
    {
      class: "w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
    },
    {},
    {}
  )}`}</button>  <button class="md:hidden p-2 lg:p-3 xl:p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle mobile menu">${`${validate_component(Menu, "Menu").$$render(
    $$result,
    {
      class: "w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7"
    },
    {},
    {}
  )}`}</button></div></div>  ${``}</div></header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="border-t border-gray-200 dark:border-gray-800 mt-16"><div class="max-w-4xl mx-auto px-4 py-6"><div class="flex flex-col md:flex-row items-center justify-between"><p class="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0" data-svelte-h="svelte-npof8h">2025-PRESENT © Pradana Yahya Abdillah
      
      </p><div class="flex space-x-3"><a href="https://github.com/haipradana" target="_blank" rel="noopener noreferrer" class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="GitHub">${validate_component(Github, "Github").$$render($$result, { class: "w-4 h-4" }, {}, {})}</a> <a href="https://linkedin.com/in/pradana-yahya" target="_blank" rel="noopener noreferrer" class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="LinkedIn">${validate_component(Linkedin, "Linkedin").$$render($$result, { class: "w-4 h-4" }, {}, {})}</a> <a href="https://x.com/haipradana" target="_blank" rel="noopener noreferrer" class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="Twitter">${validate_component(Twitter, "Twitter").$$render($$result, { class: "w-4 h-4" }, {}, {})}</a> <a href="mailto:pradanayahyaabdillah@mail.ugm.ac.id" class="p-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="Email">${validate_component(Mail, "Mail").$$render($$result, { class: "w-4 h-4" }, {}, {})}</a></div></div></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen flex flex-col">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="flex-1">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
