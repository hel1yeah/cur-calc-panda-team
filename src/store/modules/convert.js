import { getConvert } from './../../axios/convert';

export default {
  namespaced: true,
  state() {
    return {
      isConver: null,
      error: null,
      loading: false,
    };
  },
  mutations: {
    isConverStart(state) {
      state.isConver = null;
      state.error = null;
      state.loading = true;
    },
    isConverSuccess(state, payload) {
      state.isConver = payload;
      state.error = null;
      state.loading = true;
    },
    isConverFailure(state, payload) {
      state.isConver = null;
      state.error = payload;
      state.loading = true;
    },
  },
  actions: {
    async getIsConverStart({ commit }, option) {
      commit('isConverStart');
      try {
        const { data } = await getConvert(option);
        console.log(data.result);
        commit('isConverSuccess', data.result);
      } catch (err) {
        console.log(err);
        commit('isConverFailure', err);
      }
    },
    // getIsConverStart({ commit }, option) {
    //   return new Promise(() => {
    //     commit('isConverStart');
    //     getConvert(option)
    //       .then(({ data }) => {
    //         console.log(data);
    //         commit('isConverSuccess', data);
    //       })
    //       .catch((err) => {
    //         commit('isConverFailure', err);
    //       });
    //   });
    // },
  },
};
