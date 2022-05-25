
 <template>
  <section id="print">
    <div id="header">
      <BigTitle :text="'LEISTUNGEN'" :dark="true" />
      <MainTitle :text="'Print'" :dark="true" />
      <ShortDesc :text="desc" :dark="true" />
    </div>
    <div id="print-grid">
      <figure v-for="(item, index) in print" :key="index">
        <img :src="item.icon" alt="" class="icon" />
        <div>
          <strong>{{ item.title }}</strong>
          <span>{{ item.desc }}</span>
        </div>
      </figure>
    </div>
    <div id="print-img">
      <img src="https://i.imgur.com/VO7wRiR.jpg" alt="" />
      <img src="https://i.imgur.com/U9maKe2.jpg" alt="" />
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#print {
  @apply text-center pb-24;
  background: #1b1d1f;

  @media (min-width: 1280px) {
    @apply px-12 grid gap-12;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "header header img"
      "items items img"
      "items items img"
      "items items img";

    #header {
      grid-area: header;
    }
  }
  @media (min-width: 1536px) {
    @apply gap-4;
  }
}
#print-grid {
  --columns: 1;
  @apply grid gap-8 mt-12;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-area: items;

  @media (min-width: 1280px) {
    @apply flex flex-col gap-12;
  }
  @media (min-width: 1366px) {
    @apply mt-9;
  }

  figure {
    --columns: 1;
    --areas: "icon" "info";
    @apply grid  gap-2;
    grid-template-columns: repeat(var(--columns), 1fr);
    grid-template-areas: var(--areas);

    @media (min-width: 768px) {
      --columns: 5;
      --areas: "icon info info info info" "icon info info info info";
    }
    @media (min-width: 1280px) {
      --areas: "icon info info info info";
    }
  }
  div {
    grid-area: info;
    @apply flex flex-col;
    @media (min-width: 768px) {
      @apply text-left;
    }
  }
  strong {
    color: #e5e5e5;
    @apply mb-2;
  }

  span {
    @apply text-sm mx-6;
    line-height: 1.7;
    color: #777;
    @media (min-width: 768px) {
      @apply mx-0 mr-14;
    }
  }

  .icon {
    grid-area: icon;
    height: 4rem;
    @apply mx-auto;

    @media (min-width: 768px) {
      @apply ml-auto mr-4;
    }
  }
}
#print-img {
  @apply hidden;
  @media (min-width: 1280px) {
    @apply grid place-items-center mr-12 gap-8 mt-24;
    grid-area: img;
  }

  img {
    max-height: 22rem;
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
      desc: `Der Druck auf Flyer, Geschäftsausstattung und Broschüren sind eine Grundausstattung für jedes Unternehmen, hier stehen wir Ihnen mit unserer Jahrelangen Erfahrung zur Seite.`,
      print: [
        {
          icon: "https://i.imgur.com/hCGuk0S.png",
          title: "Flyer",
          desc: `Flyer sind essenziell für jedes Unternehmen, von einfacher Werbung bis hin zur Erinnerungen an Ermäßigungen. Wir bieten Ihnen hier für jeden Auftrag die notwendige Fachexpertise an.`,
        },
        {
          icon: "https://i.imgur.com/8bDSGVD.png",
          title: "Geschäftsausstattung",
          desc: `Ihre Geschäftsausstattung können Sie natürlich auch uns überlassen, mit Ihren Vorstellungen und Ihrer Marke statten wir Sie in jeder Hinsicht aus.`,
        },
        {
          icon: "https://i.imgur.com/HzMEkm4.png",
          title: "Broschüren",
          desc: `Broschüren für Sie vor Ort oder zum Versand an potenzielle Kunden erstellen wir Ihnen nach Wunsch und Bedarf.`,
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>