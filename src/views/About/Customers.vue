

 <template>
  <section id="customer">
    <div class="left">
      <BigTitle
        :text="'STOLZ, MIT ZU ARBEITEN'"
        :dark="false"
        :customer="true"
      />
      <MainTitle :text="'Unsere Kunden'" :dark="false" :customer="true" />
      <ShortDesc :text="desc" :dark="false" :customer="true" />
    </div>
    <div class="right" id="customers-grid">
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

  @media (min-width: 768px) {
    @apply grid grid-cols-2 py-12 place-items-center px-32;
  }
}

#customers-grid {
  --columns: 1;
  @apply grid gap-8 mx-6 mt-2 place-items-center;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 3;
  }
}
</style> 

<script>
import GoTop from "../../components/GoTop.vue";
import BigTitle from "../../components/BigTitle.vue";
import MainTitle from "../../components/MainTitle.vue";
import ShortDesc from "../../components/ShortDesc.vue";
export default {
  components: { BigTitle, MainTitle, ShortDesc, GoTop },

  data() {
    return {
      index: 0,
      desc: "Jedes abgeschlossene Projekt macht uns noch hungriger, hungrig nach mehr Designs und mehr Produktionen.",
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