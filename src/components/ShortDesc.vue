 <template>
  <p :class="{ dark: dark, customer: customer }">{{ text }}</p>
</template>

 <style lang='postcss' scoped>
p {
  --clr: #666;
  @apply text-center mx-4;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--clr);

  &.dark {
    --clr: #777;
  }
  &.customer {
    @media (min-width: 1024px) {
      @apply text-left mx-0;
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