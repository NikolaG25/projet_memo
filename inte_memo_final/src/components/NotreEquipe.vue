<template>
  <div id="notre_equipe">
    <div class="img1_accueil">
      <h1>Nous découvrir</h1>
      <h2>Découvrez notre équipe et nos projets</h2>
    </div>
    <div class="qui_sommes_nous">
      <h2>Qui sommes-nous ?</h2>
      <p>La Maison des Étudiants de Montbéliard (MéMO) est une association créée par les étudiants de Montbéliard, pour tous les étudiants de l'agglomération du pays de Montbéliard.
        <br/><br/>Notre but ? Rassembler tous les étudiants, peu importe leur établissement ou leur filière, autour de différents projets.
        <br/><br/>Des soirées, des évènements sportifs, culturels ou tout simplement des échanges entre étudiants, tout est prévu pour améliorer votre vie sur le campus !
        <br/><br/>Nous participons à des gros projets mis en place par nos partenaires, mais nous créons également nos propres projets, et nous vous aidons à concrétiser les vôtres !
        <br/><br/>Nous possédons également un local, où vous pourrez venir vous détendre, manger, travailler et rencontrer de nouvelles personnes !
        <br/><br/>Où nous trouver ? C'est simple : Sur le campus des portes du Jura, entre le grand amphi et le bâtiment DUT Mesures Physiques.
        <br/><br/>Notre équipe vous accueillera tous les midis, avec le sourire, bien entendu !

        Vous voulez en savoir plus sur notre équipe et nos projets ? C'est juste ici !</p>
      <iframe src="https://snazzymaps.com/embed/344805" width="100%" height="600px" style="border:none;"></iframe>
    </div>

    <div class="list_team">
      <h2>Notre équipe</h2>
      <p>Bureau 2021-2022</p>
      <ul>
        <li>
          <img src="@/assets/img_team/noelie_team.png" alt="">
          <div class="info_personne_team">
            <p>Noélie GÉHIN</p>
            <p>présidente de la MéMO</p>
          </div>
        </li>

        <li>
          <div class="info_personne_team">
            <p>Dimitri FRETY</p>
            <p>vice-président</p>
          </div>
          <img src="@/assets/img_team/dimitri_team.png" alt="">
        </li>

        <li>
          <img src="@/assets/img_team/yasmine_team.png" alt="">
          <div class="info_personne_team">
            <p>Yasmine EL HAMINE</p>
            <p>secrétaire</p>
          </div>
        </li>

        <li>
          <div class="info_personne_team">
            <p>Raphaël BONIN</p>
            <p>trésorier</p>
          </div>
          <img src="@/assets/img_team/raph_team.png" alt="">
        </li>

        <li>
          <img src="@/assets/img_team/pablo_team.png" alt="">
          <div class="info_personne_team">
            <p>Pablo TRIS</p>
            <p>responsable partenariats</p>
          </div>

        </li>

        <li>
          <div class="info_personne_team">
            <p>Éléa RICHARD</p>
            <p>responsable interfilière</p>
          </div>

          <img src="@/assets/img_team/elea_team.png" alt="">
        </li>

        <li>
          <img src="@/assets/img_team/joris_team.png" alt="">
          <div class="info_personne_team">
            <p>Joris LIN</p>
            <p>responsable communication</p>
          </div>

        </li>

        <li>
          <div class="info_personne_team">
            <p>Lauren RAMANANTENA</p>
            <p>responsable local</p>
          </div>

          <img src="@/assets/img_team/lauren_team.png" alt="">
        </li>
      </ul>
    </div>

    <div class="benevoles">
      <h2>Les bénévoles</h2>
      <p>
        La MéMO ne serait rien sans bénévoles. Notre équipe et toutes les personnes qui nous aident à faire vivre l'association sont des étudiants bénévoles.
        <br>
        Grace à tous ces bénévoles nous pouvons vous accueillir dans notre local, vous proposer un lieu d'échange et de détente, mais également réaliser de nombreux projets !
        <br>
        Vous pouvez également nous rejoindre et faire parti des bénévoles pour contribuer à la vie étudiante sur le campus, et dans l'agglomération du pays de Montbéliard
      </p>
    </div>

    <div class="nos_projet">
      <h2>Nos projets</h2>
      <p>Le but de la MéMO est de rassembler les étudiants autour de différents projets, ces derniers peuvent prendre différentes formes.
        <br>
        Si vous êtes étudiant et que vous souhaitez organiser un petit évènement sur le campus, la MéMO peut vous accompagner pour le mettre en place. Notre local permet également d'avoir un lieu pour pouvoir le réaliser.
        <br>
        Notre association monte également des projets elle même, projets concrétisés grâce à l'aide de nos nombreux bénévoles toujours prêts à nous épauler.
        <br>
        Des soirées, des évènements culturels, sportifs ou bien tout simplement des échanges entre les étudiants, nous mettons tout en œuvre pour améliorer votre vie étudiante !
        <br>
        La MéMO participe également à de plus gros évènements organisés par nos partenaires où nous avons l'occasion de les épauler lors de la mise en œuvre de ceux-ci.
        <br>
        <br>
        En plus des projets, nous bénéficions d'un local dans lequel notre équipe vous accueille chaque midi. <br>
        La MéMO se veut être un lieu convivial où vous pouvez vous détendre et faire de nombreuses activités, mais également manger, ou bénéficier d'un espace de travail.
        <br>
        Quoi qu'il en soit, nous vous accueillerons toujours à bras ouverts !
      </p>
    </div>

    <div class="contact">
      <h2>Nous contacter</h2>
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
      <input type="text" id="contenu" required>
      <button><a href="#">Envoyer</a></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotreEquipe'
}
</script>

<style scoped>

</style>
