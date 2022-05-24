 <template>
  <Services />
  <OutdoorAds />
  <Foiling />
  <Print />
  <Formation />
</template>

 <style lang='scss' scoped>
</style> 

<script>
import Services from "./Services.vue";
import OutdoorAds from "./OutdoorAds.vue";
import Foiling from "./Foiling.vue";
import Print from "./Print.vue";
import Formation from "./Formation.vue";
export default {
  components: { Services, OutdoorAds, Foiling, Print, Formation },

  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>