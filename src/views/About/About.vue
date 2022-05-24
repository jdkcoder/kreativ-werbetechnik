 <template>
  <div id="about">
    <BigTitle :text="'Über Uns'" :dark="false" />
    <MainTitle :text="'Warum Kreativ Werbetechnik'" :dark="false" />
    <ShortDesc :text="desc" :dark="false" />
    <div id="about-grid">
      <div v-for="(item, index) in abouts" :key="index">
        <strong>{{ item.title }}</strong>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

 <style lang='postcss' scoped>
#about {
  @apply text-center px-4 pb-20;
  color: #666;

  @media (min-width: 768px) {
    @apply px-32;
  }
}
#about-grid {
  @apply grid mt-8;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 3;
    @apply text-left;
  }

  p {
    @apply text-base mx-4 font-normal;
    line-height: 1.8;
  }
  strong {
    @media (min-width: 1024px) {
      @apply text-sm;
    }
  }
}
strong {
  @apply mx-4;
  color: #333;
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
import MainTitle from "../../components/MainTitle.vue";
import ShortDesc from "../../components/ShortDesc.vue";
export default {
  components: {
    BigTitle,
    MainTitle,
    ShortDesc,
  },

  data() {
    return {
      index: 0,
      desc: `Augenmaß und Feingefühl, Sicherheit und Erfahrung. Bei der Fertigung und
      Montage unserer Werbung und Werbemedien für Sie spielen viele Dinge eine
      wesentliche Rolle. Präzises Arbeiten, auch in luftigen Höhen, eine ruhige
      Hand und das Nutzen der richtigen Technik und Hilfsmittel sind dabei maßgeblich.`,
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