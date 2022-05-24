
 <template>
  <section id="projects">
    <BigTitle :text="'UNSERE GROSSARTIGEN PROJEKTE'" :dark="false" />
    <MainTitle :text="'Die Arbeit, die wir lieben'" :dark="false" />
    <ShortDesc :text="desc" :dark="false" />
    <div id="projects-filters">
      <button
        type="button"
        v-for="(filter, index) in filters"
        :key="index"
        :category-name="filter.category"
        @click="flt($event)"
      >
        {{ filter.category }}
      </button>
    </div>
    <div id="projects-grid" v-if="!z">
      <div
        class="item"
        v-for="(project, index) in projects.slice(0, 12)"
        :key="index"
      >
        <img :src="project.img" />
        <span>{{ project.category }}</span>
      </div>
    </div>
    <div id="projects-grid" v-if="z">
      <div
        class="item"
        v-for="(project, index) in projectsFiltered"
        :key="index"
      >
        <img :src="project.img" />
        <span>{{ project.category }}</span>
      </div>
    </div>
  </section>
</template>

 <style lang='postcss' scoped>
#projects {
  @apply text-center pb-12;

  @media (min-width: 1024px) {
    @apply px-32;
  }
}
#projects-filters {
  @apply grid gap-4 mx-4 mt-6;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 3;
  }

  @media (min-width: 1280px) {
    @apply mx-6;
    --columns: 6;
  }

  button {
    background: #3070d4;
    color: #fff;
    @apply p-1;
  }
}
#projects-grid {
  @apply mt-8 grid place-items-center gap-8 px-6;
  --columns: 1;
  grid-template-columns: repeat(var(--columns), 1fr);

  @media (min-width: 768px) {
    --columns: 2;
  }
  @media (min-width: 1024px) {
    --columns: 4;
  }
  &.clicked {
    .item {
      transform: scale(0);
      transition: all 0.4s ease-in-out;
    }
  }

  .item {
    @apply w-full h-full overflow-hidden relative cursor-pointer;
    aspect-ratio: 1;

    img {
      --s: 1;
      @apply relative;
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: center;
      transform: scale(var(--s));
      transition: all 0.4s ease-in-out;
    }

    span {
      --o: 0;
      @apply absolute text-left px-4 py-2;
      color: #fff;
      background: rgba(0, 0, 0, 0.25);
      inset: 0;
      opacity: var(--o);
      transition: 0.4s ease-in-out;
    }
    &:hover {
      img {
        --s: 1.2;
      }
      span {
        --o: 1;
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
      z: false,
      desc: `Wir glauben, dass unsere Arbeit für sich selbst spricht. Stöbern Sie unten unter unseren neuesten Projekten.`,
      projects: [
        {
          img: "https://i.imgur.com/OWb9sZa.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/EX0JeZX.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/DQj6VOP.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/zHl2yZs.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/wTZgvxh.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/KlvPUoE.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/Kf80UY2.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/FbwUEmP.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/4rzIVyE.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/lIEdbgM.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/dWVrkda.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/19ZHQlT.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/rV9www9.jpg",
          category: "3D Buchstaben",
        },
        {
          img: "https://i.imgur.com/TBSNskE.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/acCcy86.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/M9Tro9R.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/gFGN28o.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/mc8GwQC.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/0HFCeRb.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/IqJC3Iu.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/JY4qbuH.jpg",
          category: "Digitaldruck",
        },
        {
          img: "https://i.imgur.com/965q966.jpg",
          category: "Leuchtbuchstaben",
        },
        {
          img: "https://i.imgur.com/mBn4mWU.jpg",
          category: "Leuchtbuchstaben",
        },
        {
          img: "https://i.imgur.com/5zlCS0X.jpg",
          category: "Leuchtreklame",
        },
        {
          img: "https://i.imgur.com/5zlCS0X.jpg",
          category: "Schilder",
        },
      ],
      projectsFiltered: [],
      filters: [
        {
          category: "All",
        },
        {
          category: "3D Buchstaben",
        },
        {
          category: "Digitaldruck",
        },
        {
          category: "Leuchtbuchstaben",
        },
        {
          category: "Leuchtreklame",
        },
        {
          category: "Schilder",
        },
      ],
    };
  },

  methods: {
    flt(e) {
      let ctg = e.currentTarget.getAttribute("category-name");
      let z = this.projects.filter((i) => i.category === ctg);

      if (ctg === "All") {
        this.z = false;
      } else {
        this.z = true;
        this.projectsFiltered = [];
        this.projectsFiltered = z;
      }
    },
  },
  mounted() {},
};
</script>