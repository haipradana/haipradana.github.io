import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { I as Icon } from "./github.js";
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Linkedin as L,
  Mail as M
};
