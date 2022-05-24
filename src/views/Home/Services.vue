 <template>
  <section id="services">
    <BigTitle :text="bigTitle" />

    <h1>UNSERE LEISTUNGEN</h1>
    <p>
      Wir sind ein mittelständisches Unternehmen mit Sitz in Dreieich. Gegründet
      2004, beschäftigten wir uns seit jeher mit der Herstellung von
      Beschilderung und Werbemitteln für Industrie, Handel und den öffentlichen
      Bereich und bieten ein umfangreiches Angebot an innovativen
      Produktionsverfahren und Produkten.
    </p>
    <div class="services-grid">
      <div v-for="(service, index) in services" :key="index">
        <i :class="'icon ' + service.icon"></i>
        <strong>{{ service.title }}</strong>
        <p>{{ service.desc }}</p>
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


  .services-grid {
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

  h1 {
    @apply relative text-3xl font-bold text-center mt-2 mb-6;
    color: #333;

    &::after {
      --x: -50%;
      --left: 50%;
      content: "";
      @apply absolute;
      background-color: #0070c9;
      height: 2.5px;
      width: 6rem;
      bottom: -1rem;
      left: var(--left);
      transform: translateX(var(--x));
    }

    @media (min-width: 768px) {
      @apply text-5xl;
    }
  }
  p {
    @apply text-center mx-4;
    font-size: 1.0625rem;
    line-height: 1.7;
    color: #666;
  }
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
export default {
  components: { BigTitle },

  data() {
    return {
      index: 0,
      bigTitle: "HALLO WIR SIND KREATIV WERBETECHNIK",
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