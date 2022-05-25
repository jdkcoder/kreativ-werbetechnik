<script setup>
</script>

 <template>
  <nav id="mobile-nav">
    <div id="visible">
      <RouterLink to="/">
        <img src="https://i.imgur.com/zthFtp5.png" alt="" class="logo" />
      </RouterLink>
      <button type="button" id="toggle-mnav" @click="toggleNav">
        <i class="icon fa-light fa-bars"></i>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <ul id="mnav-items">
      <li class="item">
        <RouterLink to="/">Startseite</RouterLink>
      </li>
      <li class="item">
        <RouterLink to="/ueberuns/">Über Uns</RouterLink>
      </li>
      <li class="item dropdown" @click="dropdownTriggered($event)">
        <RouterLink to="/services/">Leistungen</RouterLink>
        <button type="button" class="arrow">
          <i class="fa-solid fa-caret-down"></i>
        </button>

        <ul class="sub-menu">
          <li>
            <RouterLink to="/leuchtkasten/"> Leuchtkasten </RouterLink>
          </li>
          <li>
            <RouterLink to="/fahrzeugbeschriftung/">
              Fahrzeugbeschriftung
            </RouterLink>
          </li>
        </ul>
      </li>
      <li class="item">
        <RouterLink to="/contact/">Kontakt</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
.logo {
  height: 1.75rem;
}
#mobile-nav {
  z-index: 9999;
  background: var(--main-bg);
  color: var(--main-txt);
  @apply fixed min-h-0 w-full p-4 overflow-hidden;
  transition: all 0.4s ease-in-out;

  @media (min-width: 1280px) {
    @apply hidden;
  }

  &.active {
    @apply min-h-screen;
    background: #1f2223;
    transition: all 0.4s ease-in-out;

    #mnav-items {
      @apply overflow-hidden min-h-screen opacity-100 pt-4 pointer-events-auto;
      transition: all 0.4s ease-in-out;
    }
    .icon {
      transition: all 0.4s ease-in-out;
    }
    .fa-bars {
      @apply opacity-0;
    }
    .fa-xmark {
      @apply opacity-100;
    }
  }
}
#visible {
  @apply w-full flex justify-between;
}
#mnav-items {
  @apply overflow-hidden min-h-0 h-0 opacity-0 uppercase text-xs font-normal pointer-events-none;
  color: var(--nav-text-triggered);
  transition: all 0.4s ease-in-out;

  .item {
    @apply p-4 cursor-pointer;
    border-bottom: 1px solid rgba(51, 51, 51, 1);

    &.dropdown {
      overflow: hidden;
      height: 3rem;
      transition: height 0.25s ease-in-out;

      &.active {
        .sub-menu {
          overflow-y: auto;
          height: 5.25rem;
          @apply mt-4;

          li {
            @apply py-4;
            border-bottom: 1px solid rgba(51, 51, 51, 1);

            &:first-of-type {
              border-top: 1px solid rgba(51, 51, 51, 1);
            }
          }

          &::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
        }
      }
    }
  }
}
ul.sub-menu {
  @apply mt-4;
}
#toggle-mnav {
  @apply relative text-xl mr-4;

  .icon {
    @apply absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s ease-in-out;
  }
  .fa-bars {
    @apply opacity-100;
  }
  .fa-xmark {
    @apply opacity-0;
  }
}
.arrow {
  @apply ml-2;
}
</style> 

<script>
export default {
  components: {},

  data() {
    return { z: false };
  },

  methods: {
    toggleNav() {
      document.querySelector("#mobile-nav").classList.toggle("active");
    },
    dropdownTriggered(e) {
      this.z = !this.z;
      let slideDown = (el) => (el.style.height = `9.25rem`);
      if (this.z) {
        slideDown(e.currentTarget.closest(".dropdown"));
        e.currentTarget.closest(".dropdown").classList.add("active");
      } else {
        e.currentTarget.closest(".dropdown").removeAttribute("style");
        e.currentTarget.closest("dropdown").classList.remove("active");
      }
    },
  },
  mounted() {
    let items = document.querySelectorAll("#mnav-items > .item > a");
    for (let item of items) {
      item.addEventListener("click", () => {
        document.querySelector("#mobile-nav").classList.remove("active");
      });
    }
  },
};
</script>