 <template>
  <h2 :class="{ dark: dark }">{{ text }}</h2>
</template>

 <style lang='postcss' scoped>
h2 {
  color: #ddd;
  @apply text-2xl font-bold mx-4 pt-20 uppercase;

  &.dark {
    color: #444;
  }
}
</style> 

<script>
export default {
  props: {
    text: String,
    dark: Boolean,
  },
};
</script>