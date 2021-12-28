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
          <h2>A propos</h2>
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
          <img class="logo_facebook" src="@/assets/img_accueil/logo_facebook.svg" alt="Facebook"><a href="#"></a>
          <img class="logo_insta" src="@/assets/img_accueil/logo_insta.svg" alt="Instagram"><a href="#"></a>
        </div>
      </div>
      <div class="mentions">
        <p>Site web réalisé dans le cadre d'un projet pédagogique du département MMI Montbéliard</p>
        <p> © 2021</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style type="text/css">

</style>
