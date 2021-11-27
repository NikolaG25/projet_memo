<template>
  <div id="app" class="grid">
    <header>
      <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
          <div class="header_menu_mobile">
            <router-link to="/accueil">
              <img src="src/assets/LogoMemoBleu_carre.png" alt="Logo de la MéMO">
            </router-link>
          </div>
          <div class="ul-insc-conn">
            <ul>
              <router-link to="/accueil">
                Accueil
              </router-link>
              <router-link to="/evenements">
                Événements
              </router-link>
              <router-link to="/bonsPlans">
                Bons plans
              </router-link>
              <router-link to="/bde">
                Les Associations Étudiantes
              </router-link>
              <router-link to="/forum">
                Forum
              </router-link>
              <router-link to="/notreEquipe">
                Notre équipe
              </router-link>
            </ul>
            <div class="inscription-connexion">
              <router-link to="/inscription" class="inscription">S'inscrire</router-link>
              <router-link to="/connexion" class="connexion">Se connecter</router-link>
            </div>
          </div>

        </nav>
      <router-link to="/accueil">
        <img src="@/assets/LogoMemoBleu_carre.png" alt="Logo de la MéMO">
      </router-link>
    </header>



    <div id="footer" class="a_propos_follow">
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
      <div class="mentions">
        <p>Site web réalisé dans le cadre d'un projet pédagogique
          du département MMI Montbéliard <br/> © 2021</p>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style type="text/css">

</style>
