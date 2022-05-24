
 <template>
  <section id="services">
    <BigTitle :text="text" :dark="false" />
  </section>
</template>

 <style lang='scss' scoped>
</style>

<script>
import BigTitle from "../../components/BigTitle.vue";
export default {
  components: { BigTitle },

  data() {
    return {
      index: 0,
      text: "UNSERE LEISTUNGEN",
    };
  },

  methods: {},
  mounted() {},
};
</script>