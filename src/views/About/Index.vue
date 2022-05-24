
 <template>
  <HeroSection />
  <About />
  <Achievements />
  <Customers />
</template>

 <style lang='scss' scoped>
</style> 

<script>
import HeroSection from "./HeroSection.vue";
import About from "./About.vue";
import Achievements from "./Achievements.vue";
import Customers from "./Customers.vue";
export default {
  components: { About, HeroSection, Achievements, Customers },

  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>