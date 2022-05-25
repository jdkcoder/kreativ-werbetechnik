
 <template>
  <section id="foiling">
    <div id="header">
      <BigTitle :text="'LEISTUNGEN'" :dark="false" />
      <MainTitle :text="'Folierung'" :dark="false" />
      <ShortDesc :text="desc" :dark="false" />
    </div>

    <div id="foiling-grid">
      <figure v-for="(item, index) in items" :key="index">
        <i :class="'icon ' + item.icon"></i>
        <div>
          <strong>{{ item.title }}</strong>
          <span>{{ item.desc }}</span>
        </div>
      </figure>
    </div>

    <div id="img-grid">
      <img src="https://i.imgur.com/q5sVKsg.jpg" alt="" />
      <img src="https://i.imgur.com/UInaisA.jpg" alt="" />
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#foiling {
  @apply text-center pb-12;
  @media (min-width: 1280px) {
    @apply grid px-32;
    column-gap: 1rem;

    grid-template-areas:
      "img header"
      "img items";
    #header {
      grid-area: header;
    }
  }
}
#foiling-grid {
  --columns: 1;
  @apply grid gap-12 mt-12;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    @apply text-left;
  }

  @media (min-width: 1280px) {
    @apply flex flex-col;
    justify-content: flex-start;
    grid-area: items;
  }

  figure {
    @apply flex flex-col gap-4 mx-4;

    @media (min-width: 768px) {
      @apply flex-row items-center mx-8;
    }
  }

  div {
    @apply flex flex-col gap-2;
  }
  span {
    @apply text-sm;
    line-height: 1.7;
    color: #666;
  }
}
#img-grid {
  @apply hidden;
  @media (min-width: 1280px) {
    @apply grid place-items-center gap-4 ml-12 mt-24;
    grid-area: img;
  }
  img {
    max-height: 22rem;
    width: 100%;
  }
}

.icon {
  --clr: #666;
  @apply text-4xl;
  color: var(--clr);
  transition: all 0.25s ease-in-out;

  &:hover {
    --clr: #296fc3;
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
      desc: `Die Beschriftung eines Schaufensters, Fahrzeugs oder LKWs ist eine Art der Beschilderung, die dazu dient, durch die Verwendung von Buchstabenformen, die oft groß und fett sind, auf sich aufmerksam zu machen.`,
      items: [
        {
          icon: "fa-light fa-truck-field",
          title: "Fahrzeugbeschriftung",
          desc: `Wir sind die Profis, wenn es um Fahrzeugbeschriftungen im Raum Frankfurt geht: Mehr als 15 Jahre Erfahrung und Hunderte erfolgreiche Projekte sprechen für sich. Wir setzen Ihre Ideen in die Wirklichkeit um.`,
        },
        {
          icon: "fa-solid fa-shop",
          title: "Schaufensterbeschriftung",
          desc: `Wir sind Spezialisten für hochwertige und individuelle Glasbeklebungen in Franfkurt und Umgebung.`,
        },
        {
          icon: "fa-regular fa-desktop",
          title: "Aufkleber / Schilder",
          desc: `Egal ob kleine Aufkleber oder große Beschilderung. Wir kleben Ihre Drucksachen überall in jeder Größe.`,
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>