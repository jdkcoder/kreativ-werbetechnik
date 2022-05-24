
 <template>
  <section id="achievements">
    <BigTitle :text="'Werbung, die Sie nach vorne bringt!'" :dark="true" />
    <MainTitle :text="'ANDERS UND ERFAHREN'" :dark="true" />
    <ShortDesc :text="desc" :dark="true" />
    <div id="achievements-grid">
      <div v-for="(item, index) in achievements" :key="index">
        <i :class="'icon ' + item.icon"></i>
        <span>{{ item.numb }}</span>
        <strong>{{ item.text }}</strong>
      </div>
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#achievements {
  @apply text-center pb-20;
  background: #1b1d1f;
  color: #777;

  @media (min-width: 768px) {
    @apply px-32;
  }
}
#achievements-grid {
  --columns: 1;
  @apply grid gap-12 mt-8 pb-8;
  grid-template-columns: repeat(var(--columns), 1fr);
  color: #444;

  @media (min-width: 768px) {
    --columns: 3;
  }

  div {
    @apply flex flex-col gap-2 mx-4 whitespace-nowrap;

    span {
      @apply text-4xl font-bold;
      color: #777;

      @media (min-width: 1280px) {
        @apply text-5xl;
      }
    }

    strong {
      @apply uppercase text-sm;
    }
  }

  .icon {
    @apply text-4xl;
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
      desc: "EINE AGENTUR DIE SIE VERSTEHT UND IHRE WÜNSCHE IN ERFÜLLUNG BRINGT.",
      achievements: [
        {
          icon: "fa-regular fa-thumbs-up",
          numb: 800,
          text: "Erfolgreiche Projekte",
        },
        {
          icon: "fa-solid fa-heart",
          numb: 400,
          text: "Glückliche Kunden",
        },
        {
          icon: "fa-solid fa-flag",
          numb: 16,
          text: "Jahre Erfahrung.",
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>