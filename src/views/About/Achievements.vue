
 <template>
  <section id="achievements">
    <BigTitle :text="text" :dark="true" />
    <h1>ANDERS UND ERFAHREN</h1>
    <p>EINE AGENTUR DIE SIE VERSTEHT UND IHRE WÜNSCHE IN ERFÜLLUNG BRINGT.</p>
  </section>
</template>

 <style lang='postcss' scoped>
#achievements {
  @apply text-center pb-12;
  background: #1b1d1f;
  color: #777;
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
    @apply mx-4
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
    };
  },

  methods: {},
  mounted() {},
};
</script>