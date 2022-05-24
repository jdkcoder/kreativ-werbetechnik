
 <template>
  <section id="achievements">
    <BigTitle :text="text" :dark="true" />
    <h1>ANDERS UND ERFAHREN</h1>
    <p>EINE AGENTUR DIE SIE VERSTEHT UND IHRE WÜNSCHE IN ERFÜLLUNG BRINGT.</p>
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
}
#achievements-grid {
  --columns: 1;
  @apply grid gap-12 mt-8;
  grid-template-columns: repeat(var(--columns), 1fr);
  color: #444;

  div {
    @apply flex flex-col gap-2;

    span {
      @apply text-4xl font-bold;
      color: #777;
    }
  }

  .icon {
    @apply text-4xl;
  }
}

h1 {
  color: #fff;
  @apply relative text-center text-3xl font-bold mt-2 mb-8;

  &::after {
    content: "";
    @apply absolute;
    background: #fff;
    height: 2.5px;
    width: 6rem;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    @apply text-5xl;
  }
}

p {
  @apply mx-4;
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
export default {
  components: { BigTitle },

  data() {
    return {
      index: 0,
      text: "Werbung, die Sie nach vorne bringt!",
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