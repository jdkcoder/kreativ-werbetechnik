

 <template>
  <section id="customer">
    <BigTitle :text="text" :dark="false" />
    <h1>Unsere Kunden</h1>
    <p class="mx-6">
      Jedes abgeschlossene Projekt macht uns noch hungriger, hungrig nach mehr
      Designs und mehr Produktionen.
    </p>
    <div id="customers-grid">
      <div v-for="(item, index) in customers" :key="index">
        <img :src="item.img" alt="" />
      </div>
    </div>

    <GoTop />
  </section>
</template>

 <style lang='postcss' scoped>
#customer {
  @apply relative text-center pb-8;
  color: #666;
}
#customers-grid {
  --columns: 1;
  @apply grid gap-8 mx-6 mt-2;
  grid-template-columns: repeat(var(--columns), 1fr);
}
h1 {
  color: #333;
  @apply relative text-center text-3xl font-bold mt-2 mb-8;

  &::after {
    content: "";
    @apply absolute;
    background: #296fc3;
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
</style> 

<script>
import GoTop from "../../components/GoTop.vue";
import BigTitle from "../../components/BigTitle.vue";
export default {
  components: { BigTitle, GoTop },

  data() {
    return {
      index: 0,
      text: "STOLZ, MIT ZU ARBEITEN",
      customers: [
        {
          img: "https://i.imgur.com/srd7ofD.jpg",
        },
        {
          img: "https://i.imgur.com/6SByn8Y.jpg",
        },
        {
          img: "https://i.imgur.com/0hN5nIR.jpg",
        },
        {
          img: "https://i.imgur.com/m99fOwU.jpg",
        },
        {
          img: "https://i.imgur.com/7cvWY9o.jpg",
        },
        {
          img: "https://i.imgur.com/hxJXn8z.jpg",
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>