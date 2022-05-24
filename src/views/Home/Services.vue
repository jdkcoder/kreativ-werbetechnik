 <template>
  <section id="services">
    <BigTitle :text="'HALLO WIR SIND KREATIV WERBETECHNIK'" :dark="false" />
    <MainTitle :text="'UNSERE LEISTUNGEN'" :dark="false" />
    <ShortDesc :text="desc" :dark="false" />
    <div id="something">
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index">
          <i :class="'icon ' + service.icon"></i>
          <strong>{{ service.title }}</strong>
          <p>{{ service.desc }}</p>
        </div>
      </div>
      <div id="laptop">
        <img src="https://i.imgur.com/zdAZc8i.png" alt="" />
      </div>
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#services {
  width: 100%;
  @apply relative text-center;

  &::before {
    content: "";
    @apply absolute w-full top-0 left-0;
    height: 1.625rem;
    background: #1f2223;
  }

  #something {
    @media (min-width: 1024px) {
      @apply px-32;
    }
    @media (min-width: 1280px) {
      @apply px-0 flex ml-32 mt-8 gap-4;
    }
    #laptop {
      @apply hidden;

      @media (min-width: 1280px) {
        @apply flex flex-1;
        justify-content: flex-end;
      }
    }

    .services-grid {
      flex: 1.5;
      --columns: 1;
      @apply mt-12 grid place-items-center text-center gap-8;
      grid-template-columns: repeat(var(--columns), 1fr);

      @media (min-width: 768px) {
        --columns: 2;
      }

      div {
        @apply flex flex-col;
        strong {
          @apply text-sm m-4;
        }
        p {
          @apply text-sm;
        }
      }

      .icon {
        @apply text-4xl;
        color: #296fc3;
      }
    }
  }
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
import MainTitle from "../../components/MainTitle.vue";
import ShortDesc from "../../components/ShortDesc.vue";
export default {
  components: { BigTitle, MainTitle, ShortDesc },

  data() {
    return {
      index: 0,
      desc: `Wir sind ein mittelständisches Unternehmen mit Sitz in Dreieich. Gegründet
      2004, beschäftigten wir uns seit jeher mit der Herstellung von
      Beschilderung und Werbemitteln für Industrie, Handel und den öffentlichen
      Bereich und bieten ein umfangreiches Angebot an innovativen
      Produktionsverfahren und Produkten.`,
      services: [
        {
          icon: "fa-light fa-lightbulb",
          title: "LEUCHTREKLAME",
          desc: `Der Einsatz von Leuchtreklamen für Ihre Werbung ermöglicht Ihnen eine
          ansprechende Präsentation Ihres Unternehmens, sowohl im Innen- als
          auch im Außenbereich.`,
        },
        {
          icon: "fa-brands fa-quora",
          title: "PROFILBUCHSTABEN",
          desc: `Profilbuchstaben, die oft auch als Reliefbuchstaben bezeichnet werden,
          sind die Klassiker im Bereich Lichtwerbung und Leuchtreklame und
          werden von uns individuell.`,
        },
        {
          icon: "fa-solid fa-car",
          title: "BESCHRIFTUNGEN",
          desc: `Die Beschriftung Ihrer Schaufenster, Fahrzeuge oder LKWs sind eine Art
          der Beschilderung, die dazu dient, durch große, fette und variable
          Buchstabenformen auf sich Aufmerksam zu machen.`,
        },
        {
          icon: "fa-solid fa-print",
          title: "DIGITALDRUCK",
          desc: ` Durch unser umfangreiches Wissen der Erstellung von effektiven
          Werbeprodukte stellen wir sicher, dass unsere Kunden den besten
          Gegenwert für Ihre Investition in unserem Service erhalten.`,
        },
      ],
    };
  },
};
</script>