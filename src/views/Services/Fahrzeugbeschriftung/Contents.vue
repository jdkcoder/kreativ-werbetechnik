 <template>
  <section id="contents">
    <div id="item-1">
      <MainTitle :text="'Fahrzeugbeschriftung'" :dark="false" />
      <p>
        Fahrzeugbeschriftungen sind eine großartige Möglichkeit, Ihr Unternehmen
        mit einem kostengünstigen und effektiven Marketinginstrument zu
        bewerben. Beschriftungen können als Teil Ihrer Marketingkampagne für
        Ihre Produkte oder Dienstleistungen eingesetzt werden. Sie können aus
        einer Vielzahl von Größen und Farben für Ihre Fahrzeugbeschriftung
        wählen. Wir bieten eine große Auswahl an attraktiven Beschriftungen und
        Designs, aus denen Sie wählen können. Wir bieten unseren Kunden eine
        große Auswahl an Schildern und Schriftzügen in verschiedenen Farben und
        Schattierungen, die mit der Farbbeschichtung oder sogar den Logos an den
        Seiten Ihres Fahrzeugs übereinstimmen können, um Ihr Unternehmen noch
        weiter zu bewerben. Auf diese Weise sind wir in der Lage, das Design
        perfekt auf Ihre Bedürfnisse abzustimmen und gleichzeitig ein
        professionelles Erscheinungsbild zu gewährleisten, das Sie sich für
        Ihren Markennamen wünschen. Außerdem können Sie aus einer Vielzahl von
        Befestigungsmöglichkeiten für Ihre Fahrzeugbeschriftung wählen. Sie
        können den Schriftzug einfach mit Haken oder Nägeln aufhängen, während
        andere Befestigungsmethoden mehr Möglichkeiten bieten, wie Sie Ihre
        Marke darstellen können.
      </p>
    </div>
    <div id="img-grid">
      <img
        v-for="(item, index) in images"
        :key="index"
        :src="item.img"
        alt=""
      />
    </div>

    <div id="item-2">
      <MainTitle :text="'Unsere Leistungen'" :dark="false" />
      <ul>
        <li>Fahrzeugbeschriftung</li>
        <li>Fahrzeugfolierung</li>
        <li>LKW, BUS Beschriftung</li>
      </ul>
    </div>
    <GoTop />
  </section>
</template>

 <style lang='postcss' scoped>
#contents {
  @apply relative pt-12 pb-4;
  color: #333;
  line-height: 1.7;

  @media (min-width: 1536px) {
    @apply grid;
    grid-template-areas:
      "item-1 item-3 item-3 item-3"
      "item-2 item-3 item-3 item-3";
    #item-1 {
      @apply ml-4;
      grid-area: item-1;
    }
    #item-2 {
      grid-area: item-2;
    }
    #img-grid {
      grid-area: item-3;
      align-self: center;
      img {
        max-height: 200px;
        min-height: 200px;
      }
    }
  }

  div {
    @apply p-4;
  }
}

#img-grid {
  @apply grid gap-8;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 2;
  }
  @media (min-width: 1024px) {
    @apply grid gap-6;
    --columns: 3;
  }
  @media (min-width: 1536px) {
    --columns: 2;
    @apply place-items-center;
    gap: 1.25rem;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  @apply flex flex-row gap-6 text-sm justify-center;

  & > * + * {
    @apply relative;
    &::before {
      content: "|";
      @apply absolute;
      top: 50%;
      left: -0.75rem;
      transform: translateY(-55%);
    }
  }
}
</style> 

<script>
import GoTop from "../../../components/GoTop.vue";
import MainTitle from "../../../components/MainTitle.vue";

export default {
  components: { MainTitle, GoTop },

  data() {
    return {
      index: 0,
      images: [
        {
          img: "https://i.imgur.com/eCXB614.jpg",
        },
        {
          img: "https://i.imgur.com/vzH8zN4.jpg",
        },
        {
          img: "https://i.imgur.com/zyCqK7y.jpg",
        },
        {
          img: "https://i.imgur.com/i9RPENY.jpg",
        },
        {
          img: "https://i.imgur.com/IikxNUx.jpg",
        },
        {
          img: "https://i.imgur.com/k4cluvQ.jpg",
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>