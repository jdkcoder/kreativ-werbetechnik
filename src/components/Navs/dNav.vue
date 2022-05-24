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
          <li>
            <RouterLink to="/services/"> Leistungen </RouterLink>
            <!-- <ul class="sub-menu">
              <li>
                <RouterLink to="/leuchtkasten/"> Leuchtkasten </RouterLink>
              </li>
              <li>
                <RouterLink to="/fahrzeugbeschriftung/">
                  Fahrzeugbeschriftung
                </RouterLink>
              </li>
            </ul> -->
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
    @apply mx-10;

    ul {
      @apply flex flex-col gap-3;

      li {
        color: var(--clr);
        transition: all 0.4s ease-in-out;
        @apply relative  text-sm;

        &::before {
          content: "> ";
          @apply absolute;
          color: #777 !important;
          left: -1rem;
          top: 50%;
          transform: translateY(calc(-50% - 0.5px));
        }

        &:hover {
          --clr: #fff;
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
</style> 

<script>
export default {
  components: {},

  data() {
    return {};
  },

  methods: {},
  mounted() {},
};
</script>