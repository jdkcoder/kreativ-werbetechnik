

 <template>
  <Carousel />
  <Services />
  <Projects />
  <Inquiry />
</template>

 <style lang='scss' scoped>
</style> 

<script>
import Carousel from "./Carousel.vue";
import Services from "./Services.vue";
import Projects from "./Projects.vue";
import Inquiry from "./Inquiry.vue";

export default {
  components: { Carousel, Services, Projects, Inquiry },

  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>