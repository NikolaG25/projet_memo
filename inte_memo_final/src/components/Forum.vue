<template>
  <div id="forum" class="grid">
    <div class="intro_forum">
      <h2>Forum</h2>
      <p>Bienvenue sur le forum des étudiants. Ici vous pourrez échanger directement avec l'équipe de la MéMO, mais également avec vos amis.
        <br>Bien entendu la bienveillance est le respect sont nos meilleurs amis !</p>
    </div>

    <div class="sujet">
      <h2>Les sujets</h2>

      <div class="button_forum">
        <div>
          <button class="new_post"><img src="@/assets/img_forum/new_post_icon.svg" alt="Nouveau post"></button>
          <button class="refresh"><img src="@/assets/img_forum/refresh_icon.svg" alt="Rafraichir"></button>
        </div>


        <form class="tag_form">
          <label for="tags"></label>

          <select name="tags" id="tags">
            <option value="">Tags</option>
            <option value="tag1">Tag 1</option>
            <option value="tag2">Tag 2</option>
          </select>
        </form>
      </div>

      <div class="pages_forum">
        <div class="nbr_page">
          <span class="page_forum1">1</span>
          <span class="page_forum2">2</span>
        </div>

        <div class="fleche">
          <button class="fleche_gauche"><img src="@/assets/img_forum/fleche_gauche.jpg" alt="Page précédente"></button>
          <button class="fleche_droite"><img src="@/assets/img_forum/fleche_droite.jpg" alt="Page suivante"></button>
        </div>

      </div>

      <div class="liste_sujets">
        <ul>
          <li>Réglement (2)</li>
          <li>FAQ de la MéMO (61)</li>
          <li><router-link to="sujetForum">Entre étudiants (98)</router-link></li>
          <li>Événements culturels (36)</li>
          <li>Entraide (51)</li>
          <li>Initiative étudiantes (156)</li>
          <li>Vivre à Montbéliard (48)</li>
          <li>Soirée d'halloween (39)</li>
          <li>Améliorer le campus pour les étudi... (31)</li>
          <li>Soirée à l'OB (64)</li>
        </ul>
      </div>

      <div class="pages_forum">
        <div class="nbr_page">
          <span class="page_forum1">1</span>
          <span class="page_forum2">2</span>
        </div>

        <div class="fleche">
          <button class="fleche_gauche"><img src="@/assets/img_forum/fleche_gauche.jpg" alt="Page précédente"></button>
          <button class="fleche_droite"><img src="@/assets/img_forum/fleche_droite.jpg" alt="Page suivante"></button>
        </div>

      </div>
    </div>

    <div class="new_subject">
      <h2>Nouveau sujet</h2>

      <label for="title"></label>

      <input type="text" id="title" required maxlength="15" placeholder="Saisir le titre du sujet">

      <div class="select_style_post">
        <div class="text_style">
          <img src="@/assets/img_forum/B.svg" alt="B">
          <img src="@/assets/img_forum/I.svg" alt="I">
          <img src="@/assets/img_forum/U.svg" alt="U">
          <img src="@/assets/img_forum/S.svg" alt="S">
        </div>

        <div class="list_style">
          <img src="@/assets/img_forum/list_circle.svg" alt="">
          <img src="@/assets/img_forum/list_number.svg" alt="">
        </div>

        <div class="icon_img">
          <img src="@/assets/img_forum/smiley.svg" alt="caractère spécial">
          <img src="@/assets/img_forum/logo_image.svg" alt="img">
        </div>
      </div>
    </div>
    <input type="text" id="contenu" required>
    <button><a href="#">Poster</a></button>

    <p class="rules_forum">Veuillez garder un langage adapté lorsque
      vous rédigez vos publications.
      <br> Tout message discriminatoire ou haineux
      sera supprimé et entrainera la sanction de
      son auteur.</p>
  </div>
</template>

<script>
export default {
  name: 'Forum'
}
</script>

<style scoped>

</style>
