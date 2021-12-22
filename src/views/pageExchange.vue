<template>
  <div class="exchange">
    <div class="exchange__header">
      <h1 class="exchange__title">Курс інозмених валют</h1>
      <app-loader-line v-if="currencyLoading"></app-loader-line>
      <template v-else>
        <label class="exchange__lable"> Базова валюта</label>
        <select class="exchange__select" v-model="baseCurrencyApp">
          <option
            class="exchange__option"
            v-for="({ countrie, currency }, index) in currencyList"
            :key="index"
            :value="countrie"
          >
            {{ currency }} [ {{ countrie }} ]
          </option>
        </select>
      </template>
    </div>
    <app-loader-circle v-if="loadingExchange"></app-loader-circle>
    <div v-else class="exchange__card--wrapper">
      <div
        class="exchange__card"
        v-for="({ name: nameCurrency, currency }, index) in exchangeRate"
        :key="index"
      >
        <h2 class="exchange__card--title">
          {{ mapCurrency[nameCurrency].name }} <span>{{ currency }}</span>
        </h2>
        <ul class="exchange__card--list">
          <li class="exchange__card--list-item">
            Назва <span> {{ mapCurrency[nameCurrency].name }}</span>
          </li>
          <li class="exchange__card--list-item">
            Країна <span>{{ mapCurrency[nameCurrency].country }}</span>
          </li>
          <li class="exchange__card--list-item">
            Курс <span>{{ currency }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// mapGetters
import { mapState } from 'vuex';
import AppLoaderCircle from './../components/AppLoaderCircle.vue';
import AppLoaderLine from './../components/AppLoaderLine.vue';
export default {
  components: { AppLoaderLine, AppLoaderCircle },
  data() {
    return {
      baseCurrencyApp: 'UAH',
      trigger: true,
      mapCurrency: {
        AED: {
          name: 'Дiрха́м',
          country: 'Обєднані Арабські Емірати',
        },
        AFN: {
          name: 'Афганец',
          country: 'Афганістан ',
        },
        ALL: {
          name: 'Лек',
          country: 'Албанія ',
        },
        AMD: {
          name: 'Драм',
          country: 'Вірменія',
        },
        ANG: {
          name: 'Гульден',
          country: 'Кюрасао та Сінт-Мартен',
        },
        AOA: {
          name: 'Ангольська кванза',
          country: 'Ангола',
        },
        ARS: {
          name: 'Аргенти́нський пе́со',
          country: 'Аргентина',
        },
        AUD: {
          name: 'Австралийский доллар',
          country: 'Австралия',
        },
        AWG: {
          name: 'Арубанский флорин',
          country: 'Аруба',
        },
        AZN: {
          name: 'Манат ',
          country: 'Азербайджан',
        },
        BAM: {
          name: 'Конвертовна марка',
          country: 'Боснія і Герцеговина',
        },
        BBD: {
          name: 'Барбадосский доллар',
          country: 'государство Барбадос',
        },
        BDT: {
          name: 'Така',
          country: 'Бангладеш',
        },
        BGN: {
          name: 'Болгарський лев',
          country: 'Болгарія',
        },
        BHD: {
          name: 'Бахрейнський динар',
          country: 'Королівство Бахрейн',
        },
        BIF: {
          name: 'Бурундийский франк',
          country: 'Бурунді',
        },
        BMD: {
          name: 'Бермудский доллар',
          country: 'Бермудські Острови',
        },
        BND: {
          name: 'Брунейский доллар ',
          country: 'султанат Бруней',
        },
        BOB: {
          name: 'Боливиа́но ',
          country: 'Боливия',
        },
        BRL: {
          name: 'Бразильський реал',
          country: 'Бразилія',
        },
        BSD: {
          name: 'Багамский доллар',
          country: 'Багами',
        },
        BTN: {
          name: 'Нгултрум',
          country: 'королівство Бутан',
        },
        BWP: {
          name: 'Пула',
          country: 'Ботсван',
        },
        BZD: {
          name: 'Белизский доллар',
          country: 'Белізу',
        },
        CAD: {
          name: 'Канадский доллар ',
          country: 'Канада',
        },
        CDF: {
          name: 'Конголезький франк',
          country: 'Демократическая Республика Конго',
        },
        CHF: {
          name: 'Швейцарський франк',
          country: 'Швейцария',
        },
        CLF: {
          name: 'Чилийское песо',
          country: 'Чили ',
        },
        CLP: {
          name: 'Чилійський песо',
          country: 'Чилі',
        },
        CNH: {
          name: 'Китайский Юань',
          country: 'Китай',
        },
        CNY: {
          name: 'Китайський Юань Женьмiньбi',
          country: 'Китай',
        },
        COP: {
          name: 'Колумбійський песо',
          country: 'Колумбия',
        },
        CUP: {
          name: 'Кубинський песо',
          country: 'Куба',
        },
        CVE: {
          name: 'Еску́до Кабо-Верде',
          country: 'Кабо-Верде',
        },
        CZK: {
          name: 'Чеська крона',
          country: 'Чехія',
        },
        DJF: {
          name: 'Франк Джибуті',
          country: 'Джибуті',
        },
        DKK: {
          name: 'Да́тская кро́на',
          country: 'Данія',
        },
        DOP: {
          name: 'Домініканський песо',
          country: 'Домініканська Республіка',
        },
        DZD: {
          name: 'Алжирський динар',
          country: 'Алжир',
        },
        EGP: {
          name: 'Єгипетський фунт',
          country: 'Республіка Єгипет',
        },
        ERN: {
          name: 'Еритрейська накфа',
          country: 'Еритрея',
        },
        ETB: {
          name: 'Ефіопський бир',
          country: 'Ефіопія',
        },
        EUR: {
          name: 'Е́вро ',
          country: 'офіційна валюта 19 з 27 країн Європейського Союзу',
        },
        FJD: {
          name: 'Фіджійський долар',
          country: 'Фіджі',
        },
        FKP: {
          name: 'Фолклендський фунт',
          country: 'Фолклендські острови',
        },
        GBP: {
          name: 'Фунт сте́рлінгів',
          country: 'Велика Британія',
        },
        GEL: {
          name: 'Грузинський ларі',
          country: 'Грузія',
        },
        GHS: {
          name: 'Седі ',
          country: 'Гана',
        },
        GIP: {
          name: 'Гібралта́рський фунт',
          country: 'Гібралтар',
        },
        GMD: {
          name: 'Даласі ',
          country: 'Гамбія',
        },
        GNF: {
          name: 'Гвінейський франк',
          country: 'Гвінея',
        },
        GTQ: {
          name: 'Гватемальський кетсаль',
          country: 'Гватемала',
        },
        GYD: {
          name: 'Гаянський долар',
          country: 'Гаяна',
        },
        HKD: {
          name: 'Гонконзький долар',
          country: 'Гонконг',
        },
        HNL: {
          name: 'Лемпіра ',
          country: 'Гондурас',
        },
        HRK: {
          name: 'Хорватська куна',
          country: 'Хорватія',
        },
        HTG: {
          name: 'Гаїтянський гурд',
          country: 'Гаїті',
        },
        HUF: {
          name: 'Угорський форинт',
          country: 'Угорщина',
        },
        IDR: {
          name: 'Індонезійська рупія',
          country: 'Індонезія',
        },
        ILS: {
          name: 'Новий ізраїльський шекель ',
          country: 'Ізраїль',
        },
        INR: {
          name: 'Індійська рупія',
          country: 'Індія',
        },
        IQD: {
          name: 'Іракський динар',
          country: 'Іракська республіка',
        },
        IRR: {
          name: 'Іранський ріал',
          country: 'Іран',
        },
        ISK: {
          name: 'Ісландська крона',
          country: 'Ісландія',
        },
        JMD: {
          name: 'Ямайський долар',
          country: 'Ямайка',
        },
        JOD: {
          name: 'Йорданський динар',
          country: 'Йорданія',
        },
        JPY: {
          name: 'Японська єна',
          country: 'Японія',
        },
        KES: {
          name: 'Кенійський шилінг ',
          country: 'Кенія',
        },
        KGS: {
          name: 'Киргизький сом',
          country: 'Киргизстан',
        },
        KHR: {
          name: 'Камбоджійський рієль',
          country: 'Камбоджі',
        },
        KMF: {
          name: 'Коморський франк',
          country: 'Коморські Острова',
        },
        KPW: {
          name: 'Північнокорейська вона',
          country: 'Корейська Народно-Демократична Республіка',
        },
        KRW: {
          name: 'Південнокорейська вона',
          country: 'Південної Кореї',
        },
        KWD: {
          name: 'Кувейтський динар',
          country: 'Кувейт',
        },
        KYD: {
          name: 'Долар Кайманових Островів',
          country: 'Кайманові Острови',
        },
        KZT: {
          name: 'Казахстанський теньге',
          country: 'Казахстан',
        },
        LAK: {
          name: 'Лаоський кіп ',
          country: 'Лаос',
        },
        LBP: {
          name: 'Ліванський фунт',
          country: 'Ліван',
        },
        LKR: {
          name: 'Рупія Шрі-Ланки',
          country: 'Шрі-Ланка',
        },
        LRD: {
          name: 'Ліберійський долар',
          country: 'Ліберія',
        },
        LSL: {
          name: 'Лоті Лесото',
          country: 'Королівство Лесото',
        },
        LYD: {
          name: 'Ліві́йський дина́р',
          country: 'Лівія',
        },
        MAD: {
          name: 'Марокканський дирхам',
          country: 'Марокко',
        },
        MDL: {
          name: 'Молдовський лей',
          country: 'Молдова',
        },
        MGA: {
          name: 'Малагасійський аріарі',
          country: 'Мадагаскар',
        },
        MKD: {
          name: 'Македонський денар',
          country: 'Північна Македонія',
        },
        MMK: {
          name: 'Мянмський кят',
          country: 'Мянма',
        },
        MNT: {
          name: 'Монгольський тугрик',
          country: 'Монголія',
        },
        MOP: {
          name: 'Аоминська патака',
          country: 'Аоминь',
        },
        MRU: {
          name: 'Мавританська угія ',
          country: 'Мавританія',
        },
        MUR: {
          name: 'Маврикійська рупія',
          country: 'Маврикія',
        },
        MVR: {
          name: 'Мальдівська руфія',
          country: 'Республіки Мальдіви',
        },
        MWK: {
          name: 'Малавійська квача',
          country: 'Малаві',
        },
        MXN: {
          name: 'Мексиканський песо',
          country: 'Мексики',
        },
        MYR: {
          name: 'Малайзійський рингіт',
          country: 'Малайзійя',
        },
        MZN: {
          name: 'Мозамбіцький метікал',
          country: 'Мозамбіка',
        },
        NAD: {
          name: 'Намібійський долар',
          country: 'Намібія',
        },
        NGN: {
          name: 'Нігерійська найра',
          country: 'Нігерія',
        },
        NOK: {
          name: 'Норвезька крона',
          country: 'Норвегія',
        },
        NPR: {
          name: 'Непальська рупія',
          country: 'Непал',
        },
        NZD: {
          name: 'Новозеландський долар',
          country: 'Нова Зеландія',
        },
        OMR: {
          name: 'Оманський ріал',
          country: 'Оман',
        },
        PAB: {
          name: 'Бальбóа ',
          country: 'Респу́бліка Пана́ма',
        },
        PEN: {
          name: 'Перуанський соль',
          country: 'Перу ',
        },
        PGK: {
          name: 'Кіна ',
          country: 'Папуа Нова Гвінея',
        },
        PHP: {
          name: 'Філіппінський песо',
          country: 'Філліппіни',
        },
        PKR: {
          name: 'Пакистанська рупія',
          country: 'Пакистан',
        },
        PLN: {
          name: 'Зло́тий ',
          country: 'Польща',
        },
        PYG: {
          name: 'Гуарані ',
          country: 'Парагвай',
        },
        QAR: {
          name: 'Катарський ріал',
          country: 'Катар',
        },
        RON: {
          name: 'Румунський лей',
          country: 'Румунія',
        },
        RSD: {
          name: 'Сербський динар',
          country: 'Сербія',
        },
        RUB: {
          name: 'Російський рубль',
          country: 'Російська Федерація',
        },
        RWF: {
          name: 'Руандійський франк',
          country: 'Руанда',
        },
        SAR: {
          name: 'Саудівський ріал',
          country: 'Саудівська Аравія',
        },
        SCR: {
          name: 'Сейшельська рупія',
          country: 'Сейшельські острова',
        },
        SDG: {
          name: 'Суданський фунт',
          country: 'Судан',
        },
        SEK: {
          name: 'Шведська крона',
          country: 'Швеція',
        },
        SGD: {
          name: 'Сінгапурський долар',
          country: 'Сінгапур',
        },
        SHP: {
          name: 'Фунт Святої Єлени',
          country: 'Острови Святої Єлени',
        },
        SLL: {
          name: 'Леоне Сьєрра-Леоне',
          country: 'Сьєрра-Леоне',
        },
        SOS: {
          name: 'Сомалійський шилінг',
          country: 'Сомалі',
        },
        SRD: {
          name: 'Суринамський долар',
          country: 'Суринам',
        },
        SYP: {
          name: 'Сирійський фунт',
          country: 'Сирія',
        },
        SZL: {
          name: 'Свазілендський ліланґені',
          country: 'Свазіленд',
        },
        THB: {
          name: 'Бат',
          country: 'Таїланд',
        },
        TJS: {
          name: 'Таджицький сомоні',
          country: 'Таджикистану',
        },
        TMT: {
          name: 'Туркменський манат',
          country: 'Туркменістан',
        },
        TND: {
          name: 'Туніський динар',
          country: 'Туніс',
        },
        TOP: {
          name: 'Па́анга',
          country: 'Тонга',
        },
        TRY: {
          name: 'Турецька ліра',
          country: 'Туреччина',
        },
        TTD: {
          name: 'Долар Тринідаду і Тобаго',
          country: 'Республіка Тринідад і Тобаго',
        },
        TWD: {
          name: 'Новий тайванський долар',
          country: 'Республіка Китай',
        },
        TZS: {
          name: 'Танзанійський шилінг',
          country: 'Танзанія',
        },
        UAH: {
          name: 'Українська гривня',
          country: 'Україна',
        },
        UGX: {
          name: 'Угандійський шилінг',
          country: 'Уганда',
        },
        USD: {
          name: 'Доллар США',
          country: 'Сполучені Штати Америки',
        },
        UYU: {
          name: 'Уругвайський песо',
          country: 'Уругвай',
        },
        UZS: {
          name: 'Узбецький сум',
          country: 'Узбекистан',
        },
        VND: {
          name: 'Вєтнамський донг',
          country: 'Вєтнам',
        },
        VUV: {
          name: 'Ва́ту',
          country: 'Республіка Вануату',
        },
        WST: {
          name: 'Тала',
          country: 'Самоа',
        },
        XAF: {
          name: 'Центральноафриканський франк',
          country: 'Шість незалежних держав у Центральній Африці',
        },
        XCD: {
          name: 'Східнокарибський долар',
          country: 'Сім карибських держав',
        },
        XDR: {
          name: 'Спеціа́льні права́ запози́чення',
          country: 'Міжнародний Валютний Фонд',
        },
        XOF: {
          name: 'Західноафриканський франк',
          country: 'Вісіми незалежних держав в Західній Африці',
        },
        XPF: {
          name: 'Французький тихоокеанський франк',
          country: 'Чьотирьох тихоокеанський країн франції',
        },
        YER: {
          name: 'Єменський ріал',
          country: 'Ємен',
        },
        ZAR: {
          name: 'Південноафриканський ранд',
          country: 'Південно-Африканська Республіка',
        },
        ZMW: {
          name: 'Замбійська квача ',
          country: 'Замбія',
        },
      },
    };
  },
  methods: {
    getExchangeRate() {
      if (this.exchangeRate && this.exchangeRate.length > 0 && this.trigger)
        return false;
      this.$store
        .dispatch('exchange/getExchangeRate', this.baseCurrencyStore)
        .then(() => {
          this.trigger = true;
        });

      this.$store.commit('currencies/setBaseCurrency', this.baseCurrencyApp);
    },

    getCurrencyList() {
      if (this.currencyList && this.currencyList.length > 0) return false;
      this.$store.dispatch('currencies/getCurrencyList');
    },

    setBaseCurrency() {
      this.baseCurrencyApp = this.baseCurrencyStore;
    },
  },
  computed: {
    // ...mapGetters(['exchange/getExchangeRateStore']),
    ...mapState({
      loadingExchange: (state) => state.exchange.loading,
      exchangeRate: (state) => state.exchange.exchangeRate,
      error: (state) => state.exchange.error,
      currencyList: (state) => state.currencies.currencyList,
      currencyLoading: (state) => state.currencies.loading,
      baseCurrencyStore: (state) => state.currencies.baseCurrency,
    }),
  },
  mounted() {
    this.setBaseCurrency();
    this.getExchangeRate();
    this.getCurrencyList();
  },
  watch: {
    baseCurrencyApp: function (val) {
      this.trigger = false;
      this.baseCurrencyApp = val;
      this.getExchangeRate();
    },
  },
};
</script>

<style lang="scss" scoped>
.exchange {
}
.exchange__title {
}
.exchange__select {
  margin: 0 0 0 30px;
}
.exchange__card--wrapper {
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.exchange__card {
  background: linear-gradient(90deg, #dae4f4 0%, #d3dcf1 100%);
  border-radius: 10px;
  margin: 20px 6px;
  padding: 15px;
  width: 355px;
  min-height: 300px;
  box-shadow: 0px 0px 10px var(--blue-clor);
  min-height: 240px;
}
.exchange__card--title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  & > span {
    font-size: 18px;
  }
}
.exchange__card--list {
  list-style-type: none;
  padding: 0;
  font-size: 18px;
}
.exchange__card--list-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 0;
  & > span {
    text-align: right;
  }
}

@media screen and (max-width: 1240px) {
  .exchange__card {
    flex-grow: 1;
    margin: 10px 20px;
  }
}
</style>
