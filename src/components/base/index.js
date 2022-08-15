import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import BaseInputSubmit from "./BaseInputSubmit.vue";

/** Loaders */
import BaseLoaderDotted from "./BaseLoaderDotted.vue";
import BaseLoaderSpinner from "./BaseLoaderSpinner.vue";

export {
  BaseInput,
  BaseButton,
  BaseInputSubmit,
  BaseLoaderDotted,
  BaseLoaderSpinner,
};

const components = [
  BaseInput,
  BaseButton,
  BaseInputSubmit,
  BaseLoaderDotted,
  BaseLoaderSpinner,
];

export default {
  install(Vue) {
    components.forEach((cmp) => Vue.component(cmp.name, cmp));
  },
};
