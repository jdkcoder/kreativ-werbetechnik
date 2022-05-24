<script setup>
</script>

 <template>
  <section id="inquiry">
    <BigTitle :text="bigTitle" :dark="true" />
    <h1>So funktioniert's</h1>
    <p>
      Unsere Lieferzeiten in Deutschland betragen 3-4 Wochen ab Ihrer
      Bestellung. Wir bieten auch einen Express Service mit 2 Wochen Lieferzeit
      an.
    </p>

    <div id="inquiries-grid">
      <div v-for="(item, index) in inquiries" :key="index">
        <i :class="'icon ' + item.icon"></i>
        <strong>{{ item.title }}</strong>
        <span>{{ item.desc }}</span>
      </div>
    </div>

    <div id="inquiry-btn">
      <button type="button">
        <i class="fa-light fa-rocket-launch"></i>
        <span>Jetzt Anfragen</span>
      </button>
      <button type="button">
        <i class="fa-light fa-images"></i>
        <span>Leistungen</span>
      </button>
    </div>

    <GoTop />
  </section>
</template>

 <style lang='postcss' scoped>
#inquiry {
  @apply relative pb-16;
  background: #1b1d1f;

  @media (min-width: 768px) {
    @apply text-center;
  }

  &::after {
    content: "";
    @apply absolute left-0 -bottom-12 w-full;
    background: #fff;
    max-width: 100vw;
    height: 3rem;
  }
}
#inquiries-grid {
  --columns: 1;
  @apply grid text-center mt-12 gap-12;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 2;
  }

  div {
    @apply flex flex-col;
    strong {
      @apply text-sm m-4;
      color: #fff;
    }
    span {
      @apply text-sm;
      color: #777;
    }
  }
  .icon {
    @apply text-5xl;
    color: #fff;
  }
}
#inquiry-btn {
  @apply flex flex-col mt-8 gap-16;

  button {
    @apply w-max mx-auto py-3 px-8 flex gap-2 items-center;
    background: #296fc3;
    color: #fff;
  }
}
h1 {
  color: #fff;
  @apply relative text-center text-3xl font-bold mt-2 mb-8;

  &::after {
    content: "";
    @apply absolute;
    background: #fff;
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
p {
  @apply text-center mx-4;
  color: #777;
  font-size: 1.0625rem;
  line-height: 1.7;
}
</style> 

<script>
import BigTitle from "../../components/BigTitle.vue";
import GoTop from "../../components/GoTop.vue";
export default {
  components: { BigTitle, GoTop },

  data() {
    return {
      bigTitle: "ANFRAGE ERSTELLEN",
      inquiries: [
        {
          icon: "fa-light fa-file",
          title: "1. Anfrage",
          desc: "Laden Sie Ihr Design hoch konfiguriere das Produkt.",
        },
        {
          icon: "fa-light fa-memo-pad",
          title: "2. Angebot",
          desc: "Wir schicken Ihnen ein Angebot und eine Visualisierung.",
        },
        {
          icon: "fa-light fa-wrench",
          title: "3. Produktion",
          desc: "Wir produzieren Ihr Produkt und lassen es zu Ihnen liefern.",
        },
        {
          icon: "fa-light fa-truck",
          title: "4. Installation",
          desc: "Sie installieren Ihr Schild oder wir schicken Ihnen ein Montage-Team.",
        },
      ],
    };
  },

  methods: {},
  mounted() {},
};
</script>