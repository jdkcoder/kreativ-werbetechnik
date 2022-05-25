 <template>
  <HeroSection />
  <Ribbon />
  <Contents />
</template>

<script>
import Contents from "./Contents.vue";
import HeroSection from "./HeroSection.vue";
import Ribbon from "./Ribbon.vue";

Contents;
export default {
  components: { HeroSection, Contents, Ribbon },
};
</script>