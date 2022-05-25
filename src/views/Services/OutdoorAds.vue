
 <template>
  <section id="outdoor-ads">
    <div id="header">
      <BigTitle :text="'LEISTUNGEN'" :dark="true" />
      <MainTitle :text="'Außenwerbung'" :dark="true" />
      <ShortDesc :text="desc" :dark="true" />
    </div>
    <div id="ads-grid">
      <figure v-for="(item, index) in ads" :key="index">
        <img :src="item.icon" alt="" class="icon" />
        <div>
          <strong>{{ item.title }}</strong>
          <span>{{ item.desc }}</span>
        </div>
      </figure>
    </div>
    <div id="ads-img">
      <img src="https://i.imgur.com/mSHZCr3.jpg" alt="" />
      <img src="https://i.imgur.com/zVXO8Eb.jpg" alt="" />
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#outdoor-ads {
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
#ads-grid {
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
#ads-img {
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
      desc: `Außenwerbung ist die Verwendung von Plakatwänden und anderen Arten von Außenwerbemedien, um potenzielle Kunden zum Besuch der Einrichtung zu bewegen, die diese Schilder aufstellt.`,
      ads: [
        {
          icon: "https://i.imgur.com/a7kiDfa.png",
          title: "Leuchtkasten",
          desc: `Hierbei handelt es sich um eine Art der Beschilderung, bei der beleuchtete Banner oder Leuchtkästen verwendet werden, um Aufmerksamkeit zu erregen und Ihre Botschaft zu vermitteln.`,
        },
        {
          icon: "https://i.imgur.com/K2n6lvF.png",
          title: "LED Einzelbuchstaben",
          desc: `LED-Buchstaben sind eine hervorragende Möglichkeit, Ihrem Geschäft eine persönliche Note zu verleihen.`,
        },
        {
          icon: "https://i.imgur.com/7vIKi2q.png",
          title: "Schilder / Banner",
          desc: `Werbeschilder haben ein großes Potenzial, um Aufmerksamkeit zu erregen und Ihre Produkte zu bewerben. Als Verbraucher sind wir immer auf der Suche nach neuen und aufregenden Wegen, um etwas über neue Unternehmen oder Produkte zu erfahren, die uns zur Verfügung stehen.`,
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>