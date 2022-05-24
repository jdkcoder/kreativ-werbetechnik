
 <template>
  <Navs />
  <div id="content-container">
    <router-view />
    <Footer />
  </div>
</template>

 <style lang='scss'>
#app {
  position: relative;
  display: grid;
  grid-template-areas: "dnav content content";
  gap: 0;
}
#content-container {
  grid-area: content;
  width: 100%;
}
@import "./assets/styles/app.scss";
</style> 

<script>
import Navs from "./components/Navs/[Navs].vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navs, Footer },

  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>