import Vue from "vue";
import App from "./App.vue";
import Base from "@/components/base";
import store from "../../store";
import "normalize.css/normalize.css";

Vue.config.productionTip = false;
Vue.use(Base);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
