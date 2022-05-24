
 <template>
  <HeroSection />
  <About />
  <Achievements />
</template>

 <style lang='scss' scoped>
</style> 

<script>
import HeroSection from "./HeroSection.vue";
import About from "./About.vue";
import Achievements from "./Achievements.vue";
export default {
  components: { About, HeroSection, Achievements },

  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>