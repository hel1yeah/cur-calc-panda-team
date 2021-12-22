import { getConvert } from './../../axios/convert';
import { setNewObj } from '../../helpers/setNewObj';

export default {
  namespaced: true,
  state() {
    return {
      isConvertt: null,
      error: null,
      loading: false,
    };
  },
  mutations: {
    isConvertStart(state) {
      state.isConvert = null;
      state.error = null;
      state.loading = true;
    },
    isConvertSuccess(state, payload) {
      state.isConvert = payload;
      state.error = null;
      state.loading = true;
    },
    isConvertFailure(state, payload) {
      state.isConvert = null;
      state.error = payload;
      state.loading = true;
    },
  },
  actions: {
    async getIsConvert({ commit }, option) {
      commit('isConvertStart');
      try {
        const { data } = await getConvert(option);
        console.log(setNewObj(data.result));
        commit('isConvertSuccess', setNewObj(data.result));
      } catch (err) {
        console.log(err);
        commit('isConvertFailure', err);
      }
    },
    // getisConvertStart({ commit }, option) {
    //   return new Promise(() => {
    //     commit('isConvertStart');
    //     getConvert(option)
    //       .then(({ data }) => {
    //         commit('isConvertSuccess', setNewObj(data.result));
    //       })
    //       .catch((err) => {
    //         commit('isConvertFailure', err);
    //       });
    //   });
    // },
  },
};
