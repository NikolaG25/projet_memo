<template>
  <div id="app">
    <header>
      <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
          <div class="header_menu_mobile">
            <router-link to="/">
              <img src="@/assets/LogoMemoRose_Bleu.svg" alt="Logo de la MéMO">
            </router-link>
          </div>
          <div class="ul-insc-conn">
            <ul>
              <li onclick="document.documentElement.classList.toggle('menu-open')">
                <router-link to="/">
                  Accueil
                </router-link>
              </li>

              <li onclick="document.documentElement.classList.toggle('menu-open')">
                <router-link to="/evenements">
                  Événements
                </router-link>
              </li>

              <li onclick="document.documentElement.classList.toggle('menu-open')">
                <router-link to="/bonsPlans">
                  Bons plans
                </router-link>
              </li>

              <li onclick="document.documentElement.classList.toggle('menu-open')">
                <router-link to="/bde">
                  Les Associations Étudiantes
                </router-link>
              </li>

              <li onclick="document.documentElement.classList.toggle('menu-open')">
                <router-link to="/forum">
                  Forum
                </router-link>
              </li>

              <li onclick="document.documentElement.classList.toggle('menu-open')">
                <router-link to="/notreEquipe">
                  Notre équipe
                </router-link>
              </li>
            </ul>

          </div>
        </nav>
      <nav class="nav_desktop">
        <div class="menu_desktop">
          <ul>
            <li>
              <router-link to="/">
                Accueil
              </router-link>
            </li>

            <li>
              <router-link to="/evenements">
                Événements
              </router-link>
            </li>

            <li>
              <router-link to="/bonsPlans">
                Bons plans
              </router-link>
            </li>

            <li>
              <router-link to="/bde">
                Les Associations Étudiantes
              </router-link>
            </li>

            <li>
              <router-link to="/forum">
                Forum
              </router-link>
            </li>

            <li>
              <router-link to="/notreEquipe">
                Notre équipe
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-link to="/">
        <img id="logo_memo_header_desktop" src="@/assets/LogoMemoBleu_carre.png" alt="Logo de la MéMO">
        <img id="logo_memo_header_mobile" src="@/assets/LogoMemoRose_Bleu.svg" alt="Logo de la MéMO">
      </router-link>
    </header>
    <router-view/>
    <footer id="footer" class="a_propos_follow">
      <div class="propos_follow">
        <div class="a_propos">
          <h2 @click="testlog">A propos</h2>
          <ul>
            <li>
              <router-link to="/notreEquipe">Nous contacter</router-link>
            </li>
            <li>
              <router-link to="/mentionsLegales">Mentions légales</router-link>
            </li>
            <li>
              <router-link to="/bonsPlans">Nos partenaires</router-link>
            </li>
          </ul>
        </div>
        <div class="nous_suivre">
          <h2>Nous suivre</h2>
          <a href="https://www.facebook.com/assomemo2/" target="_blank"><img class="logo_facebook" src="@/assets/img_accueil/logo_facebook.svg" alt="Facebook"></a>
          <a href="https://www.instagram.com/association.memo/" target="_blank"><img class="logo_insta" src="@/assets/img_accueil/logo_insta.svg" alt="Instagram"></a>
        </div>
      </div>
      <div class="mentions">
        <p>Site web réalisé dans le cadre d'un projet pédagogique du département MMI Montbéliard</p>
        <p> © {{year}}</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      year: null,
    }
  },
  methods: {
    testlog: function () {
      document.documentElement.classList.toggle("menu-open")
    }
  },

  created() {
    let dateactuelle = new Date();
    console.log('date actuelle', dateactuelle);
    let anneeactuelle = dateactuelle.getFullYear();
    console.log(anneeactuelle);
    this.year = anneeactuelle;
  }
}
</script>

<style type="text/css">

</style>
