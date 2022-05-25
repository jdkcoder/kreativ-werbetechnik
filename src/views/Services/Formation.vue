
 <template>
  <section id="formation">
    <div id="header">
      <BigTitle :text="'LEISTUNGEN'" :dark="false" />
      <MainTitle :text="'Gestaltung'" :dark="false" />
      <ShortDesc :text="desc" :dark="false" />
    </div>

    <div id="formation-grid">
      <figure v-for="(item, index) in items" :key="index">
        <i :class="'icon ' + item.icon"></i>
        <div>
          <strong>{{ item.title }}</strong>
          <span>{{ item.desc }}</span>
        </div>
      </figure>
    </div>

    <div id="img-grid">
      <img src="https://i.imgur.com/DWitOHu.jpg" alt="" />
      <img src="https://i.imgur.com/IDx882T.jpg" alt="" />
    </div>

    <GoTop />
  </section>
</template>

 <style lang='postcss' scoped>
#formation {
  @apply relative text-center pb-12;
  @media (min-width: 1280px) {
    @apply grid px-32;
    column-gap: 1rem;

    grid-template-areas:
      "img header"
      "img items";
    #header {
      grid-area: header;
    }
  }
}
#formation-grid {
  --columns: 1;
  @apply grid gap-12 mt-12;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    @apply text-left;
  }

  @media (min-width: 1280px) {
    @apply flex flex-col;
    justify-content: flex-start;
    grid-area: items;
  }

  figure {
    @apply flex flex-col gap-4 mx-4;

    @media (min-width: 768px) {
      @apply flex-row items-center mx-8;
    }
  }

  div {
    @apply flex flex-col gap-2;
  }
  span {
    @apply text-sm;
    line-height: 1.7;
    color: #666;
  }
}
#img-grid {
  @apply hidden;
  @media (min-width: 1280px) {
    @apply grid place-items-center gap-4 ml-12 mt-24;
    grid-area: img;
  }
  img {
    max-height: 22rem;
    width: 100%;
  }
}

.icon {
  --clr: #666;
  @apply text-4xl;
  color: var(--clr);
  transition: all 0.25s ease-in-out;

  &:hover {
    --clr: #296fc3;
  }
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
import GoTop from "../../components/GoTop.vue";
import MainTitle from "../../components/MainTitle.vue";
import ShortDesc from "../../components/ShortDesc.vue";

export default {
  components: { BigTitle, MainTitle, ShortDesc, GoTop },

  data() {
    return {
      index: 0,
      desc: `Alle unsere Gestaltungen führen wir mit einem Team aus Experten und Ihrem Input aus, sodass Sie Ihre Marke ganz nach Ihren Wünschen und Vorstellungen präsentieren können.`,
      items: [
        {
          icon: "fa-regular fa-receipt",
          title: "Flyer, Menükarten, Visitenkarten",
          desc: `Ob Flyer, Menükarten oder Visitenkarten alle diese Gestalterischen Arbeiten werden von einem Experten Team und Ihren Vorstellungen ganz nach Ihren Wünschen erstellt.`,
        },
        {
          icon: "fa-regular fa-hockey-stick-puck",
          title: "Beschriftungen",
          desc: `Alle Beschriftungen werden Ihren Vorstellungen gemäß unserer Markterfahrungen erstellt. Ob klein oder groß, unsere Jahrelange Erfahrung spricht für sich.`,
        },
        {
          icon: "fa-regular fa-ruler-combined",
          title: "Werbeschilder",
          desc: `Außenwerbung an Türen, Fassaden und Fenstern oder Innenwerbung in Ihrem Unternehmen, Werbeschilder sind das Aushängeschild Ihres Unternehmers und Ihrer Marke. Diese werden ganz individuell an Ihre Ansprüche erstellt und Montiert.`,
        },
      ],
    };
  },
};
</script>