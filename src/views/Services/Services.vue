
 <template>
  <section id="services">
    <BigTitle :text="'UNSERE LEISTUNGEN'" :dark="false" />
    <MainTitle :text="'EIN PARTNER FÜR ALLES'" :dark="false" />
    <ShortDesc :text="desc" :dark="false" />

    <div id="services-grid">
      <div v-for="(item, index) in services" :key="index">
        <i :class="'icon ' + item.icon"></i>
        <strong>{{ item.title }}</strong>
        <span>{{ item.desc }}</span>
      </div>
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#services {
  @apply text-center pb-24;

  @media (min-width: 1280px) {
    @apply px-4;
  }
}
#services-grid {
  --columns: 1;
  @apply grid mt-8 gap-8 px-4;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 3;
  }

  div {
    @apply flex flex-col;
  }

  strong {
    @apply mb-2;
    color: #333;
  }
  span {
    @apply text-sm;
    line-height: 1.7;
    color: #777;
  }
  .icon {
    --bg: #ddd;
    background: var(--bg);
    color: #fff;
    @apply relative grid place-items-center w-max h-max mx-auto p-6 mb-5 mt-6 rounded-full text-4xl;
    aspect-ratio: 1;
    transition: all 0.25s ease-in-out;

    &::after {
      --s: 0;
      content: "";
      @apply absolute rounded-full;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(var(--s));
      border: 4px solid #296fc3;
      width: calc(100% + 1.5rem);
      height: calc(100% + 1.5rem);
      transition: all 0.25s ease-in-out;
    }

    &:hover {
      --bg: #296fc3;

      &::after {
        --s: 1;
      }
    }
  }
}
</style>

<script>
import BigTitle from "../../components/BigTitle.vue";
import MainTitle from "../../components/MainTitle.vue";
import ShortDesc from "../../components/ShortDesc.vue";
export default {
  components: { BigTitle, MainTitle, ShortDesc },

  data() {
    return {
      index: 0,
      desc: `Als zuverlässiger Partner für Unternehmen in den Bereichen Werbung, temporäre und permanente Beschilderung bieten wir Ihnen schnelle und kreative Antworten auf Ihre individuellen Bedürfnisse. Ob Sie einen einzelnen beleuchteten Logobuchstaben oder eine komplexe Werbeanlage benötigen – wir bieten Ihnen die effizienteste Lösung für Ihr Projekt, immer pünktlich und innerhalb Ihres Budgets. Wir haben uns auf Außenwerbelösungen von der Planung bis zur Umsetzung spezialisiert.`,
      services: [
        {
          icon: "fa-solid fa-puzzle-piece",
          title: "PRINT UND GESTALTUNG",
          desc: `Das Konzept der Marke gestalten, ein Profil geben und die Marke relevant, glaubwürdig und einzigartig gestalten. Einen noch nie dagewesenen und klaren Punkt setzen. Diese Orientierung zwischen Mensch und Marke geben und verkaufen wir Ihnen.`,
        },
        {
          icon: "fa-solid fa-pencil",
          title: "GESTALTUNG",
          desc: `Das Konzept der Marke gestalten, ein Profil geben und die Marke relevant, glaubwürdig und einzigartig gestalten. Einen noch nie dagewesenen und klaren Punkt setzen. Diese Orientierung zwischen Mensch und Marke geben und verkaufen wir Ihnen.`,
        },
        {
          icon: "fa-solid fa-up-down-left-right",
          title: "PRODUKTION & MONTAGE",
          desc: `Die Produktion mit unseren Hauseigenen Maschinen direkt vor Ort garantiert Ihnen das qualitativste Produkt auf dem Markt. Durch unsere Leidenschaft zur Werbetechnik können Sie sich auf ein geschultes Auge während der Produktion verlassen.`,
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>