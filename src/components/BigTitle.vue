 <template>
  <h2 :class="{ dark: dark, customer: customer }">{{ text }}</h2>
</template>

 <style lang='postcss' scoped>
h2 {
  color: #ddd;
  @apply text-2xl font-bold mx-4 pt-20 uppercase;

  &.dark {
    color: #444;
  }
  &.customer {
    @media (min-width: 1024px) {
      @apply pt-0 mx-0 text-left;
    }
  }
}
</style> 

<script>
export default {
  props: {
    text: String,
    dark: Boolean,
    customer: Boolean,
  },
};
</script>