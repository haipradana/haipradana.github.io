import { c as create_ssr_component, v as validate_component, a as subscribe, e as escape, d as add_attribute, f as each } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { p as projects, C as Calendar, E as External_link } from "../../../../chunks/projects.js";
import { I as Icon, G as Github } from "../../../../chunks/github.js";
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m12 19-7-7 7-7" }], ["path", { "d": "M19 12H5" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
      }
    ],
    ["path", { "d": "M7 7h.01" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "tag" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slug;
  let project;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  slug = $page.params.slug;
  project = projects.find((p) => p.slug === slug);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1469dm6_START -->${$$result.title = `<title>${escape(project ? project.title : "Project Not Found")} - Portfolio</title>`, ""}<meta name="description"${add_attribute("content", project ? project.description : "Project not found", 0)}><!-- HEAD_svelte-1469dm6_END -->`, ""} <div class="max-w-4xl mx-auto px-4 py-12">${project ? ` <div class="mb-8"><a href="/portfolio" class="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
        Back to Portfolio</a></div>  <header class="mb-12"><div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6"><h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-0">${escape(project.title)}</h1> <div class="flex items-center text-gray-500 dark:text-gray-500">${validate_component(Calendar, "Calendar").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})} ${escape(project.year)}</div></div>  <div class="relative rounded-lg overflow-hidden mb-6"><img${add_attribute("src", project.image, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-64 md:h-80 object-cover"></div>  <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"><div class="flex flex-wrap gap-2">${each(project.tags, (tag) => {
    return `<span class="inline-flex items-center px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">${validate_component(Tag, "Tag").$$render($$result, { class: "w-3 h-3 mr-1" }, {}, {})} ${escape(tag)} </span>`;
  })}</div> <div class="flex space-x-3">${project.demoUrl ? `<a${add_attribute("href", project.demoUrl, 0)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg transition-colors">${validate_component(External_link, "ExternalLink").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
              Live Demo</a>` : ``} ${project.githubUrl ? `<a${add_attribute("href", project.githubUrl, 0)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors">${validate_component(Github, "Github").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
              Source Code</a>` : ``}</div></div></header>  <article class="prose prose-lg dark:prose-invert max-w-none">${`<p class="text-gray-600 dark:text-gray-400" data-svelte-h="svelte-n7la5o">Loading content...</p>`}</article>` : ` <div class="text-center py-16"><h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4" data-svelte-h="svelte-k8riiy">Project Not Found</h1> <p class="text-xl text-gray-600 dark:text-gray-400 mb-8" data-svelte-h="svelte-2ggeir">The project you&#39;re looking for doesn&#39;t exist.</p> <a href="/portfolio" class="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg transition-colors">${validate_component(Arrow_left, "ArrowLeft").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
        Back to Portfolio</a></div>`}</div>`;
});
export {
  Page as default
};
