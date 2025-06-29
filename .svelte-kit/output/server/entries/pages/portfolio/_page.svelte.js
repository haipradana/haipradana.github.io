import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../../chunks/ssr.js";
import { E as External_link, C as Calendar, c as categories, p as projects } from "../../../chunks/projects.js";
import { I as Icon, G as Github } from "../../../chunks/github.js";
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "filter" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0) $$bindings.project(project);
  return `<div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300"><div class="relative overflow-hidden"><img${add_attribute("src", project.image, 0)}${add_attribute("alt", project.title, 0)} class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"><div class="absolute bottom-4 left-4 right-4 flex justify-between items-end"><div class="flex space-x-2">${project.demoUrl ? `<a${add_attribute("href", project.demoUrl, 0)} target="_blank" rel="noopener noreferrer" class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors" aria-label="View demo">${validate_component(External_link, "ExternalLink").$$render($$result, { class: "w-4 h-4 text-white" }, {}, {})}</a>` : ``} ${project.githubUrl ? `<a${add_attribute("href", project.githubUrl, 0)} target="_blank" rel="noopener noreferrer" class="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors" aria-label="View source code">${validate_component(Github, "Github").$$render($$result, { class: "w-4 h-4 text-white" }, {}, {})}</a>` : ``}</div></div></div></div> <div class="p-6"><div class="flex items-center justify-between mb-3"><h3 class="font-semibold text-lg text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"><a href="${"/portfolio/" + escape(project.slug, true)}" class="hover:underline">${escape(project.title)}</a></h3> <div class="flex items-center text-sm text-gray-500 dark:text-gray-500">${validate_component(Calendar, "Calendar").$$render($$result, { class: "w-4 h-4 mr-1" }, {}, {})} ${escape(project.year)}</div></div> <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">${escape(project.description)}</p> <div class="flex flex-wrap gap-2">${each(project.tags, (tag) => {
    return `<span class="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">${escape(tag)} </span>`;
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedCategory = "all";
  let filteredProjects = projects;
  {
    {
      {
        filteredProjects = projects;
      }
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-ydqjpj_START -->${$$result.title = `<title>Portfolio - Your Name</title>`, ""}<meta name="description" content="Portfolio of projects by Your Name - Developer and Designer"><!-- HEAD_svelte-ydqjpj_END -->`, ""} <div class="max-w-6xl mx-auto px-4 py-12"> <section class="text-center mb-6" data-svelte-h="svelte-toql8o"><h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Portfolio</h1> </section>  <section class="mb-12"><div class="flex items-center justify-center mb-6">${validate_component(Filter, "Filter").$$render(
    $$result,
    {
      class: "w-4 h-4 text-gray-500 dark:text-gray-500 mr-2"
    },
    {},
    {}
  )} <span class="text-gray-600 dark:text-gray-400 font-medium text-xs" data-svelte-h="svelte-2hz13c">Filter by category:</span></div> <div class="flex flex-wrap justify-center gap-2 sm:gap-3">${each(categories, (category) => {
    return `<button class="${"px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition-all duration-200 border text-xs sm:text-sm " + escape(
      selectedCategory === category.id ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 border-gray-800 dark:border-gray-200 shadow-lg" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700",
      true
    )}">${escape(category.label)} <span class="${"ml-1.5 sm:ml-2 px-1.5 py-0.5 sm:px-2 text-xs rounded-full " + escape(
      selectedCategory === category.id ? "bg-white/20 text-white dark:bg-gray-900/20 dark:text-gray-900" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400",
      true
    )}">${escape(category.count)}</span> </button>`;
  })}</div></section>  <section><div class="mb-6"><p class="text-center text-gray-600 dark:text-gray-400">Showing ${escape(filteredProjects.length)} of ${escape(projects.length)} projects
        ${``}</p></div> ${filteredProjects.length > 0 ? `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${each(filteredProjects, (project) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`;
  })}</div>` : `<div class="text-center py-16"><div class="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">${validate_component(Filter, "Filter").$$render(
    $$result,
    {
      class: "w-12 h-12 text-gray-400 dark:text-gray-600"
    },
    {},
    {}
  )}</div> <p class="text-xl text-gray-600 dark:text-gray-400 mb-4" data-svelte-h="svelte-1xlq98z">No projects in this category</p> <button class="px-6 py-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-lg transition-colors" data-svelte-h="svelte-1bprq0b">View All Projects</button></div>`}</section></div>`;
});
export {
  Page as default
};
