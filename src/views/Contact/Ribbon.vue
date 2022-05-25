<script setup>
</script>

 <template>
  <section id="ribbon">
    <div v-for="(item, index) in items" :key="index">
      <i :class="'icon ' + item.icon"></i>
      <strong>{{ item.title }}</strong>
      <span>{{ item.info }}</span>
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#ribbon {
  @apply grid gap-12 place-items-center py-12 px-8;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);
  background: #296fc3;
  color: #fff;
  white-space: nowrap;

  @media (min-width: 768px) {
    --columns: 2;
  }
  @media (min-width: 1024px) {
    @apply py-8;
    --columns: 4;
  }

  div {
    @apply flex flex-col gap-2 items-center;
  }
}

.icon {
  @apply text-4xl;
}
</style> 

<script>
export default {
  components: {},

  data() {
    return {
      index: 0,
      items: [
        {
          icon: "fa-solid fa-house",
          title: "Offices",
          info: "Im Steingrund 2, 63303 Dreieich",
        },
        {
          icon: "fa-solid fa-phone",
          title: "Bei Anfragen",
          info: "0177 8051162",
        },
        {
          icon: "fa-regular fa-clock-five",
          title: "Montag - Freitag",
          info: "9.00 bis 18.00",
        },
        {
          icon: "fa-solid fa-paper-plane",
          title: "E-mail",
          info: "info@kreativ-werbetechnik.com",
        },
      ],
    };
  },
};
</script>