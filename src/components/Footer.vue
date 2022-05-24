<script setup>
</script>

 <template>
  <footer>
    <img src="https://i.imgur.com/zthFtp5.png" class="logo" alt="" />

    <div id="social-networks">
      <i class="icon fa-brands fa-instagram"></i>
      <i class="icon fa-brands fa-facebook-square"></i>
    </div>

    <div id="address">
      <p>Im Steingrund 2</p>
      <p>63303 Dreieich</p>
      <br />
      <p>info@kreativ-werbetechnik.com</p>
      <p>Mobil: 0177 8051162</p>
    </div>
    <div id="sitemap">
      <strong>Sitemap</strong>
      <p>Printmedien</p>
      <p>Digitaldruck</p>
      <p>Leuchtbuchstaben</p>
    </div>
    <div id="rechtlich">
      <strong>Rechtlich</strong>
      <p>
        <RouterLink to="/impressum">Impressum</RouterLink>
      </p>
      <p>
        <RouterLink to="/datenschutzerklaerung-2/">Datenschutz</RouterLink>
      </p>
      <p>
        <RouterLink to="/contact/">Kontakt</RouterLink>
      </p>
    </div>
    <div id="copyright">
      <h5>
        <span>Wir </span>
        <i class="icon fa fa-heart"></i>
        <span> Werbung</span>
      </h5>
      <span class="copyright">
        Kreativ Werbetechnik | Werbung die gesehen wird. | 2022
      </span>
    </div>
  </footer>
</template>

 <style lang='postcss' scoped>
footer {
  --area: "logo" "sn" "address" "sitemap" "rechtlich" "copyright";
  @apply mt-12 grid place-items-center gap-4 text-center;
  background: #1b1d1f;
  color: #777;
  grid-template-areas: var(--area);

  @media (min-width: 768px) {
    --columns: 3;
    grid-template-columns: repeat(var(--columns), 1fr);
    --area: "logo logo logo" "sn sn sn" "address sitemap rechtlich"
      "copyright copyright copyright";
  }
  @media (min-width: 1024px) {
    @apply pt-4 gap-0;
    --columns: 4;
    --area: "logo address sitemap rechtlich" "sn address sitemap rechtlich"
      "copyright copyright copyright copyright";
  }

  strong {
    @apply text-lg;
  }

  .logo {
    @apply mt-12;
    height: 3rem;
    grid-area: logo;

    @media (min-width: 1024px) {
      width: auto;
      height: 2rem;
      margin-left: 2rem;
    }
  }
  #social-networks {
    @apply mt-4 mb-2 grid grid-cols-2 gap-4 text-base;
    color: #fff;
    grid-area: sn;
  }
  #address {
    grid-area: address;
  }
  #sitemap {
    grid-area: sitemap;
  }
  #rechtlich {
    grid-area: rechtlich;
  }
  #copyright {
    grid-area: copyright;
  }
  #address,
  #sitemap,
  #rechtlich {
    @apply w-full px-8;

    & > p:first-of-type {
      @apply mt-2;
    }
    a {
      color: #6396f8;
    }
  }
  #copyright {
    background: #141618;
    color: #777;
    @apply w-full py-6 px-4 text-center;

    @media (min-width: 1024px) {
      @apply mt-4;
    }

    h5 {
      color: #aaa;
      @apply font-bold;
    }
    .icon {
      color: #6396f8;
    }
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