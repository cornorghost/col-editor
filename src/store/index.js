import { createStore } from "vuex";

export default createStore({
  state: {
    g_ws: {},
    g_monaco: {},
    g_dialog: {}, //非必须的变量，为了防止某些地方需要

    modify: 1, //该变量为了避免两个端一直互相发信息，因为setvalue会触发
  },
  getters: {},
  mutations: {
    setGlobalMonaco(state, ins) {
      state.g_monaco = ins;
    },
    setGlobalWs(state, ins) {
      state.g_ws = ins;
    },
    setGlobalDialog(state, ins) {
      state.g_dialog = ins;
    },

    setModify(state, val) {
      state.modify = val;
    },
  },
  actions: {},
  modules: {},
});
