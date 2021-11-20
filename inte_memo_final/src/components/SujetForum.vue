<template>
  <div id="sujet_forum">
    <h2>Sujet : entre étudiants</h2>
    <div class="button_forum">
      <div>

        <button class="new_post"><img src="@/assets/img_forum/new_post_icon.svg" alt="Nouveau post"></button>
        <button class="refresh"><img src="@/assets/img_forum/refresh_icon.svg" alt="Rafraichir"></button>
      </div>

      <div class="nbr_page">
        <span class="page_forum1">1</span>
        <span class="page_forum2">2</span>
      </div>
    </div>

    <div class="pages_forum">

      <button><a href="#">Répondre</a></button>

      <div class="fleche">
        <button class="fleche_gauche"><img src="@/assets/img_forum/fleche_gauche.jpg" alt="Page précédente"></button>
        <button class="fleche_droite"><img src="@/assets/img_forum/fleche_droite.jpg" alt="Page suivante"></button>
      </div>

    </div>

    <div class="post_sujet">
      <div class="premier_post">
        <div class="presentation">
          <img src="@/assets/img_sujet_forum/noelie.png" alt="Noélie GÉHIN">
          <div class="text_presentation">
            <h3>Noélie GÉHIN</h3>
            <p>03/09/2021 12:47</p>
          </div>
        </div>
        <div class="post">
          <p>
            Voici un topic pour les échanges entre étudiants ! <br>
            N'hésitez pas à le partager pour que les gens viennent parler, plus on est de fous, plus on ris !</p>
        </div>
      </div>
      <div class="deuxieme_post">
        <div class="presentation">
          <img src="@/assets/img_sujet_forum/joris.png" alt="Joris LIN">
          <div class="text_presentation">
            <h3>Joris LIN</h3>
            <p>03/09/2021 13:21</p>
          </div>
        </div>
        <div class="post">
          <div class="message_parent">
            <p>03/09/2021 13:21</p>
            <p>Voici un topic pour les échanges entre étudiants ! <br>
              N'hésitez pas à le partager pour que les </p>
          </div>
          <p>Et en plus on est sympa (il paraît)</p>
        </div>
      </div>
      <div class="troisieme_post">
        <div class="presentation">
          <img src="@/assets/img_sujet_forum/Raph.png" alt="Raphaël BONIN">
          <div class="text_presentation">
            <h3>Raphaël BONIN</h3>
            <p>03/09/2021 13:56</p>
          </div>
        </div>
        <div class="post">
          <p>
            Du coup ici c'est pour parler de tout et de rien, y'a pas forcément de thèmes, si ?
          </p>
        </div>
      </div>
    </div>

    <div class="response">
      <h2>Répondre</h2>

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
      <input type="text" id="contenu" required>
      <button><a href="#">Poster</a></button>

      <p class="rules_forum">Veuillez garder un langage adapté lorsque
        vous rédigez vos publications.
        <br> Tout message discriminatoire ou haineux
        sera supprimé et entrainera la sanction de
        son auteur.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SujetForum'
}
</script>

<style scoped>

</style>
