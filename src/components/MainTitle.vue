 <template>
  <h1 :class="{ dark: dark, customer: customer }">{{ text }}</h1>
</template>

 <style lang='postcss' scoped>
h1 {
  --clr: #333;
  color: var(--clr);
  @apply relative text-center text-3xl font-bold mt-2 mb-8;

  &::after {
    --line-bg: #0070c9;
    --l: 50%;
    --x: -50%;
    content: "";
    @apply absolute;
    background: var(--line-bg);
    height: 2.5px;
    width: 6rem;
    bottom: -1.25rem;
    left: var(--l);
    transform: translateX(var(--x));
  }

  &.dark {
    --clr: #fff;

    &::after {
      --line-bg: #fff;
    }
  }
  &.customer {
    @media (min-width: 1024px) {
      @apply text-left;
    }

    &::after {
      @media (min-width: 1024px) {
        --l: 0.25rem;
        --x: 0;
      }
    }
  }

  @media (min-width: 768px) {
    @apply text-5xl;
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