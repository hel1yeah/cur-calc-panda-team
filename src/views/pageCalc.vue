<template>
  <h1>КОНВЕРТЕР ВАЛЮТ</h1>
  <div class="calc">
    <div class="calc__inner">
      <label class="calc__lable">
        <span>Міняю</span>
        <input
          class="calc__input"
          type="number"
          v-model.number.trim="changingSum"
        />
        <select class="calc__select" v-model="changingCurrency">
          <option
            class="calc__select--option"
            v-for="({ countrie, currency }, index) in currencyList"
            :key="index"
            :value="countrie"
          >
            {{ currency }} [ {{ countrie }} ]
          </option>
        </select>
      </label>

      <button class="calc__button--reverse" @click="onReverse" title="Розворот">
        <img src="./../assets/images/reverse.svg" alt="reverse" />
      </button>

      <label class="calc__lable">
        <span>Отримую</span>
        <span v-if="isConvert">{{ isConvert.curency }}</span>
        <!-- <input class="calc__input" type="text" v-model="receiveSum" /> -->
        <select class="calc__select" v-model="receiveCurrency">
          <option
            class="calc__select--option"
            v-for="({ countrie, currency }, index) in currencyList"
            :key="index"
            :value="countrie"
          >
            {{ currency }} [ {{ countrie }} ]
          </option>
        </select>
        <span v-if="isConvert" class="calc__lable--curency">
          За курсом {{ isConvert.rate }}
        </span>
      </label>
    </div>
    <button @click="onConvert" class="calc__button--calculate">
      Розрахувати
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  data() {
    return {
      changingSum: '',
      changingCurrency: '',
      receiveSum: '',
      receiveCurrency: 'USD',
    };
  },
  methods: {
    getCurrencyList() {
      if (this.currencyList && this.currencyList.length > 0) return false;
      this.$store.dispatch('currencies/getCurrencyList');
    },
    setBaseCurrency() {
      this.changingCurrency = this.baseCurrencyStore;
    },
    onReverse() {},
    onConvert() {
      if (this.changingSum.length === 0 || this.changingSum < 0) return false;

      const option = {
        from: this.changingCurrency,
        to: this.receiveCurrency,
        amount: this.changingSum,
      };

      this.$store.dispatch('convert/getIsConvert', option);
    },
  },
  computed: {
    ...mapState({
      loadingExchange: (state) => state.exchange.loading,
      currencyList: (state) => state.currencies.currencyList,
      baseCurrencyStore: (state) => state.currencies.baseCurrency,
      isConvert: (state) => state.convert.isConvert,
    }),
  },
  mounted() {
    this.getCurrencyList();
    this.setBaseCurrency();
  },
  watch: {
    changingCurrency: function (val) {
      this.changingCurrency = val;
    },
    receiveCurrency: function (val) {
      this.receiveCurrency = val;
    },
  },
};
</script>

<style lang="scss">
.calc {
}
.calc__inner {
  margin: 5% auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.calc__lable {
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
}
.calc__lable--curency {
  font-size: 16px;
  position: absolute;
  top: 100%;
  right: 0;
}
.calc__input {
}
.calc__select {
}
.calc__select--option {
}
.calc__button--reverse {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-color: var(--purple-clor);
  transition: 0.5s all;
  &:hover {
    box-shadow: 0px 4px 40px var(--purple-clor);
  }
}
.calc__button--calculate {
  display: block;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin: auto;
  cursor: pointer;
  border-color: var(--purple-clor);
  transition: 0.5s all;
  &:hover {
    box-shadow: 0px 4px 40px var(--purple-clor);
  }
}

@media screen and( max-width:940px) {
  .calc__inner {
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
