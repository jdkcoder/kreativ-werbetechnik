 <template>
  <div id="contents">
    <BigTitle :text="text" :dark="false" />
    <h1>Warum Kreativ Werbetechnik</h1>
    <p>
      Augenmaß und Feingefühl, Sicherheit und Erfahrung. Bei der Fertigung und
      Montage unserer Werbung und Werbemedien für Sie spielen viele Dinge eine
      wesentliche Rolle. Präzises Arbeiten, auch in luftigen Höhen, eine ruhige
      Hand und das Nutzen der richtigen Technik und Hilfsmittel sind dabei
      maßgeblich.
    </p>
    <div id="about-grid">
      <div v-for="(item, index) in abouts" :key="index">
        <strong>{{ item.title }}</strong>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

 <style lang='postcss' scoped>
#contents {
  @apply text-center px-4;
  color: #666;
}
#about-grid {
  @apply grid;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);

  p {
    @apply text-sm mx-4 font-normal;
    line-height: 1.5;
  }
}
h1 {
  color: #333;
  @apply relative text-center text-3xl font-bold mt-2 mb-8;

  &::after {
    content: "";
    @apply absolute;
    background: #296fc3;
    height: 2.5px;
    width: 6rem;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 768px) {
    @apply text-5xl;
  }
}
strong {
  color: #333;
}
p {
  @apply mb-8 mx-4;
  font-size: 1.0625rem;
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
export default {
  components: {
    BigTitle,
  },

  data() {
    return {
      index: 0,
      text: "Über Uns",
      abouts: [
        {
          title: "Gestaltung & Konzeption",
          desc: `Das Kennenlernen zwischen Mensch und Marke gestalten. Ein Profil
          geben, das die Marke relevant, glaubwürdig und einzigartig macht. Auf
          noch nie dagewesene Art einen klaren Punkt machen. Orientierung geben
          und verkaufen.`,
        },
        {
          title: "Fertigung und Montage",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
        },
        {
          title: "Produktion",
          desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`,
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>