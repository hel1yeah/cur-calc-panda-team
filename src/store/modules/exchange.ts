import { getExchange } from './../../axios/exchange';
import { CommitOptions, Payload, ActionContext } from 'vuex';
import RootState from '../index';

interface IRate {
  name: string;
  currency: number;
}

type TError = null | string;

interface IState {
  exchangeRate: null | IRate[];
  error: TError;
  loading: boolean;
}

export interface ICommit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export default {
  namespaced: true,
  state(): IState {
    return {
      exchangeRate: null,
      error: null,
      loading: false,
    };
  },
  mutations: {
    exchangeRateStart(state: IState) {
      state.exchangeRate = null;
      state.error = null;
      state.loading = true;
    },
    exchangeRateSuccess(state: IState, payload: IRate[]) {
      state.exchangeRate = payload;
      state.error = null;
      state.loading = false;
    },
    exchangeRateFailure(state: IState, payload: TError) {
      state.exchangeRate = null;
      state.error = payload;
      state.loading = false;
    },
  },
  actions: {
    getExchangeRate({ commit }: ActionContext<IState, any>, currency: string) {
      return new Promise(() => {
        commit('exchangeRateStart');

        getExchange(currency)
          .then(({ data }) => {
            const newResults: IRate[] = Object.keys(data.results).map(
              (item) =>
                ({
                  name: item,
                  currency: data.results[item],
                } as IRate)
            );

            commit('exchangeRateSuccess', newResults);
          })
          .catch((err) => {
            commit('exchangeRateFailure', err);
          });
      });
    },
  },
  getters: {
    // getExchangeRateStore(store) {
    //   store.exchangeRate;
    // },
  },
};
