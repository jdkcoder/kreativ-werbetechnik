 <template>
  <section id="contents">
    <div id="item-1">
      <MainTitle :text="'Leuchtkasten & 3d Buchstaben'" :dark="false" />
      <p>
        Lichtwerbung, auch bekannt als Leuchtreklame, ist eine Form der
        Außenwerbung, die Licht und meist auch Bewegung nutzt, um Aufmerksamkeit
        zu erregen. Lichtwerbung nutzt oft ein rotes Licht, um Aufmerksamkeit zu
        erregen. Diese Art der Werbung kann für zeitlich begrenzte
        Veranstaltungen eingesetzt werden und kann dadurch mehr Kunden
        anlocken.<br /><br />
        Beleuchtete Schilder sind eine einfache Möglichkeit, mit der richtigen
        Art, Größe und Farbe des Lichts in der ganzen Stadt für Ihr Unternehmen
        zu werben. Es gibt verschiedene Arten von beleuchteten Schildern, die
        Ihr Geschäft besser als je zuvor aussehen lassen können. Diese Schilder
        gibt es in allen möglichen Farben und Formen, sodass Sie das wählen
        können, was Ihnen in Bezug auf Stil und Design am meisten zusagt. Diese
        Schilder werden an stark befahrenen Straßen, Autobahnen und anderen
        Teilen der Stadt eingesetzt, an denen täglich Menschen auf ihrem Weg zu
        ihren Zielen vorbeikommen. Diese beleuchteten Schilder helfen, mehr
        Aufmerksamkeit von vorbeifahrenden Autofahrern und anderen Passanten zu
        erregen, in der Hoffnung, einen Verkauf tätigen zu können oder ihre
        Aufmerksamkeit zu erlangen.
      </p>
    </div>
    <div id="item-2">
      <MainTitle :text="'LED Einzelbuchstaben'" :dark="false" />
      <p>
        LED-Buchstaben sind eine hervorragende Möglichkeit, Ihrem Geschäft eine
        persönliche Note zu verleihen. Ein LED-Buchstabe kann die perfekte
        Atmosphäre für Sie und Ihre Gäste schaffen, die ideale
        Nachtclub-Erfahrung für Sie und Ihre Freunde. Wenn Sie eine Bar oder ein
        anderes Geschäft besitzen, das viel Publikumsverkehr hat, ist ein gutes
        LED-Schild eine großartige Möglichkeit, mehr Kunden anzuziehen, die auf
        dem Bürgersteig vorbeigehen und höchstwahrscheinlich daran interessiert
        sind, was Sie zu bieten haben.<br /><br />
        LED-Buchstaben sind einfach zu installieren, sodass Sie keine
        zusätzliche Hilfe benötigen, wenn Sie einen dieser Buchstaben zu Ihrem
        Schaufenster oder anderen Teilen Ihres Geschäfts hinzufügen möchten.
        LED-Buchstaben sind einfach zu installieren und können von jedem mit den
        richtigen Werkzeugen gehandhabt werden. Diese Buchstaben werden oft für
        Nachtclubs und Bars verwendet, die ein attraktives Lichtdisplay für ihre
        Geschäfte wollen. Sie können aus einer Vielzahl von Symbolen, Zahlen und
        alphabetischen Schriftzügen wählen, um Ihr Geschäft ansprechender und
        attraktiver zu gestalten.
      </p>
    </div>
    <div id="img-grid">
      <img
        v-for="(item, index) in images"
        :key="index"
        :src="item.img"
        alt=""
      />
    </div>
    <div id="item-3">
      <MainTitle :text="'Unsere Leistungen'" :dark="false" />
      <ul>
        <li>Leuchtkasten</li>
        <li>3D Einzelbuchstaben</li>
        <li>Profilbuchstaben</li>
      </ul>
    </div>

    <GoTop />
  </section>
</template>

 <style lang='postcss' scoped>
#contents {
  @apply relative pt-12 pb-4;
  color: #333;
  line-height: 1.7;

  @media (min-width: 1536px) {
    @apply grid px-24 gap-4;
    grid-template-areas:
      "item-1 item-4"
      "item-2 item-3";
    #item-1 {
      grid-area: item-1;
    }
    #item-2 {
      grid-area: item-2;
    }
    #item-3 {
      grid-area: item-3;
    }
    #img-grid {
      grid-area: item-4;
      height: 58vh;
      max-height: 550px;
      align-self: end;
      img {
        max-height: 220px;
        min-height: 220px;
      }
    }
  }

  div {
    @apply p-4;
  }
}

#img-grid {
  @apply grid gap-8;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 2;
  }
  @media (min-width: 1536px) {
    @apply place-items-center;
    column-gap: 2rem;
    row-gap: 0;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
  @apply flex flex-row gap-6 text-sm justify-center;

  & > * + * {
    @apply relative;
    &::before {
      content: "|";
      @apply absolute;
      top: 50%;
      left: -0.75rem;
      transform: translateY(-55%);
    }
  }
}
</style> 

<script>
import GoTop from "../../../components/GoTop.vue";
import MainTitle from "../../../components/MainTitle.vue";

export default {
  components: { MainTitle, GoTop },

  data() {
    return {
      index: 0,
      images: [
        {
          img: "https://i.imgur.com/ZsUumGo.jpg",
        },
        {
          img: "https://i.imgur.com/XOe1w05.jpg",
        },
        {
          img: "https://i.imgur.com/UY4GR0g.jpg",
        },
        {
          img: "https://i.imgur.com/S7Ao7wf.jpg",
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>