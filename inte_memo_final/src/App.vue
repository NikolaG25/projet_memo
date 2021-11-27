<template>
  <div id="app">
    <header>
      <div class="nav-toggle" onclick='document.documentElement.classList.toggle("menu-open")'>
        <div class="nav-toggle-bar"></div>
      </div>
      <nav class="menu">
          <div class="header_menu_mobile">
            <router-link to="/accueil">
              <img src="@/assets/LogoMemoBleu_carre.png" alt="Logo de la MéMO">
            </router-link>
          </div>
          <div class="ul-insc-conn">
            <ul>
              <li>
                <router-link to="/accueil">
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
            <div class="inscription-connexion">
              <router-link to="/inscription" class="inscription">S'inscrire</router-link>
              <router-link to="/connexion" class="connexion">Se connecter</router-link>
            </div>
          </div>
        </nav>
      <nav class="nav_desktop">
        <div class="menu_desktop">
          <ul>
            <li>
              <router-link to="/accueil">
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
          <div class="inscription_connexion_desktop">
            <button class="inscription_desktop"><a href="pages/inscription.html">S'inscrire</a></button>
            <button class="connexion_desktop"><a href="pages/connexion.html">Se connecter</a></button>
          </div>
        </div>
      </nav>
      <router-link to="/accueil">
        <img src="@/assets/LogoMemoBleu_carre.png" alt="Logo de la MéMO">
      </router-link>
    </header>



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
        <p>Site web réalisé dans le cadre d'un projet pédagogique
          du département MMI Montbéliard <br/> © 2021</p>
      </div>
    </footer>

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
