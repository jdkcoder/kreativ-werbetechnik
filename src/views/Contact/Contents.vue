 <template>
  <section id="contact">
    <div id="header">
      <BigTitle :text="'SCHREIBEN SIE UNS'" :dark="false" />
      <MainTitle :text="'Kontakt'" :dark="false" />
      <ShortDesc :text="desc" :dark="false" />
    </div>

    <div id="contact-form">
      <label>
        <p>Vor- und Nachname</p>
        <input type="name" />
      </label>
      <label>
        <p>Ihre Email</p>
        <input type="email" />
      </label>
      <label>
        <p>Ihre Email</p>
        <input type="phone" />
      </label>
      <label>
        <p>Betreff</p>
        <input type="subject" />
      </label>
      <label>
        <p>Ihre Nachricht</p>
        <textarea></textarea>
      </label>
      <label class="checkbox">
        <input type="checkbox" />
        <span>
          Hiermit bestätige ich, dass ich die Datenschutzerklärung akzeptiere.
        </span>
      </label>

      <button type="button" id="send-btn">SENDEN</button>
    </div>

    <div id="texts">
      <div>
        <strong> Wir sind überall. </strong>
        <p>
          Kreativ Werbetechnik ist seit über 15 Jahren spezialisiert auf die
          Beratung, Produktion und Realisation von qualitativer Werbetechnik.
          Mit Standorten in Frankfurt und bundesweiter Tätigkeit leitet Kreativ
          Werbetechnik auch bundesweit Großprojekte um Kunden mit technisch
          hochaktuellen Werbetechniken auszustatten.
        </p>
      </div>
      <div>
        <strong>Persönliche Beratung</strong>
        <p>
          Gern stehen wir Ihnen für eine persönliche Beratung per E-Mail,
          Telefon oder Vor Ort zur Verfügung.
        </p>
      </div>
    </div>

    <div id="social-networks">
      <ul>
        <li v-for="(item, index) in sn" :key="index">
          <i :class="'icon ' + item.icon"></i>
        </li>
      </ul>
    </div>
    <GoTop />
  </section>
</template>

 <style lang='postcss' scoped>
#contact {
  @apply relative text-center pb-12 grid gap-12;
  color: #333;

  @media (min-width: 1024px) {
    @apply gap-0;
    grid-template-areas:
      "header header"
      "form texts"
      "form sn";
    #header {
      grid-area: header;
      @apply mb-12;
    }
    #contact-form {
      @apply text-left;
      --w: 55vw;
      width: var(--w);
      grid-area: form;
    }
    #texts {
      grid-area: texts;
    }
    #social-networks {
      @apply mt-0;
      grid-area: sn;
    }
  }

  @media (min-width: 1280px) {
    @apply px-12;
    #contact-form {
      --w: 40vw;
    }
  }
  @media (min-width: 1440px) {
    @apply px-32;
  }
}
#contact-form {
  @apply px-6 grid gap-6;
  p {
    color: #777;
    @apply text-sm mb-2;
  }
  input,
  textarea {
    border: 1px solid rgb(201, 201, 201);
    @apply px-2 py-2 w-full;
    border-radius: 0.5rem;
  }
  textarea {
    height: 10rem;
  }

  .checkbox {
    @apply text-sm flex items-center gap-2;

    input {
      @apply w-max;
    }
    span {
      @apply text-left;
    }
  }

  #send-btn {
    --bg: #000;
    border-radius: 0.5rem;
    background: var(--bg);
    color: #fff;
    transition: all 0.25s ease-in-out;
    @apply w-max py-3 px-6 mx-auto text-lg;

    &:hover {
      --bg: #296fc3;
    }
  }
}
#social-networks {
  ul {
    @apply flex gap-4 items-center justify-center py-2 mx-6;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #efefef;
  }
}
#texts {
  @apply text-left text-sm px-6 flex flex-col gap-8 justify-center;
  line-height: 1.7;
  p {
    color: #777;
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
      desc: "Haben Sie fragen zu unseren Produkten oder wollen Sie eine Individuelle Beratung vor Ort? Unser Team steh Ihnen gerne mit Rat und Tat zur Seite.",
      sn: [
        {
          icon: "fa-brands fa-facebook-f",
        },
        {
          icon: "fa-brands fa-twitter",
        },
        {
          icon: "fa-brands fa-linkedin-in",
        },
        {
          icon: "fa-brands fa-pinterest",
        },
      ],
    };
  },
};
</script>