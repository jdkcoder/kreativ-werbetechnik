<script setup>
</script>

 <template>
  <section id="carousel">
    <div class="img">
          <img src="https://i.imgur.com/8eIwg6M.jpg" />
        </div>
  </section>
</template>

 <style lang='scss' scoped>
#carousel {
  width: 100%;
  color: #fff;
  background: #000;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100vh;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: var(--position);
    }
  }
}
</style> 

<script>
export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>