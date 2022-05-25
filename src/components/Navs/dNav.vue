<script setup>
</script>

 <template>
  <div id="dnav-container">
    <nav>
      <img src="https://i.imgur.com/zthFtp5.png" class="logo" alt="" />

      <div id="menu">
        <ul>
          <li>
            <RouterLink to="/">Startseite</RouterLink>
          </li>
          <li>
            <RouterLink to="/ueberuns/">Über Uns</RouterLink>
          </li>
          <li class="dropdown">
            <RouterLink to="/services/"> Leistungen </RouterLink>
            <button
              type="button"
              class="arrow"
              @click="dropdownTriggered($event)"
            >
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
          <li>
            <RouterLink to="/contact/">Kontakt</RouterLink>
          </li>
        </ul>
      </div>

      <div id="dnav-footer">
        <div id="copyright">
          <p>© KREATIV WERBETECHNIK</p>
        </div>

        <div id="social-networks">
          <i class="icon fa-brands fa-instagram"></i>
          <i class="icon fa-brands fa-facebook-square"></i>
        </div>
      </div>
    </nav>
  </div>
</template>

 <style lang='postcss' scoped>
#dnav-container {
  @apply hidden;
  grid-area: dnav;

  @media (min-width: 1280px) {
    @apply block uppercase relative h-full;
    width: 20rem;
    background: #1f2223;
    color: #777;
  }
}
nav {
  @apply fixed top-0 left-0 p-9 flex flex-col justify-between h-full;
  z-index: 999;
  width: 20rem;

  .logo {
    height: auto;
  }
  #menu {
    @apply mx-4;

    ul {
      @apply flex flex-col gap-3;

      li {
        color: var(--clr);

        transition: all 0.4s ease-in-out;
        @apply relative text-sm;

        &:not(.sub-menu > li)::before {
          content: "> ";
          @apply absolute;
          color: #777 !important;
          left: 1rem;
          top: 0;
        }
        a {
          --clr: inherit;
          color: var(--clr);
          transition: 0.25s ease-in-out;
          &:hover {
            --clr: #fff;
          }
        }

        &.dropdown {
          overflow: hidden;
          height: 1.375rem;
          transition: height 0.25s ease-in-out;

          &.active {
            .sub-menu {
              overflow-y: auto;
              height: 5rem;
              @apply ml-2 mt-2;

              &::-webkit-scrollbar {
                width: 0;
                height: 0;
              }
            }
          }
        }
        &:not(.sub-menu > li) {
          @apply pl-8;
        }
      }
    }
  }
  #copyright {
    @apply mb-4 text-center;
  }
  #social-networks {
    @apply flex justify-center gap-4;
  }
}
.arrow {
  color: #fff !important;
  @apply ml-2 text-base;
}
</style> 

<script>
export default {
  components: {},

  data() {
    return { z: false };
  },

  methods: {
    dropdownTriggered(e) {
      this.z = !this.z;
      let slideDown = (el) => (el.style.height = `5.25rem`);
      if (this.z) {
        slideDown(e.currentTarget.closest(".dropdown"));
        e.currentTarget.closest(".dropdown").classList.add("active");
      } else {
        e.currentTarget.closest(".dropdown").removeAttribute("style");
        e.currentTarget.closest("dropdown").classList.remove("active");
      }
    },
  },
  mounted() {},
};
</script>