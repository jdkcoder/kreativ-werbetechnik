<script setup>
</script>

 <template>
  <button type="button" class="goTop" @click="goTop">
    <i class="fa-light fa-angles-up"></i>
  </button>
</template>

 <style lang='scss' scoped>
.goTop {
  background: #fff;
  color: #151515;
  -webkit-box-shadow: 0px -5px 5px rgb(0 0 0 / 20%);
  box-shadow: 0px -5px 5px rgb(0 0 0 / 20%);
  width: 2.5rem;
  height: 2.5rem;
  position: absolute;
  z-index: 999;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.4s ease-in-out;

  &:hover {
    -webkit-box-shadow: 0px -5px 5px rgb(0 0 0 / 10%);
    box-shadow: 0px -5px 5px rgb(0 0 0 / 10%);
    transition: all 0.4s ease-in-out;
  }
}
</style> 

<script>
export default {
  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>