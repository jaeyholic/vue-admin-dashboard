import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}
const userSelectedDarkMode =
  window.localStorage.getItem("isDarkMode") === "true";

export default new Vuex.Store({
  state: {
    isDarkMode: userSelectedDarkMode
  },
  getters: {
    isDarkMode(state) {
      return state.isDarkMode;
    }
  },
  mutations: {
    toggleDarkMode(state) {
      if (state.isDarkMode === true) {
        state.isDarkMode = false;
        document.body.style.background = "#f0f3f5";
        window.localStorage.setItem("isDarkMode", "false");
      } else {
        state.isDarkMode = true;
        document.body.style.background = "#212c4f";
        window.localStorage.setItem("isDarkMode", "true");
      }
    }
  },
  actions: {
    triggerDarkMode({ commit }) {
      commit("toggleDarkMode");
    }
  }
});
