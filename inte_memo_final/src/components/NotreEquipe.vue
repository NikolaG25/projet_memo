<template>
  <div id="notre_equipe" >
    <div class="img1_accueil main_title_screen">
      <h1>Nous découvrir</h1>
      <h2>Découvrez notre équipe et nos projets</h2>

      <i class="arrow down"></i>
    </div>
    <div class="grid">
      <div class="qui_sommes_nous">
        <h2 class="title_underline">Qui sommes-nous ?</h2>
        <p>La Maison des Étudiants de Montbéliard (MéMO) est une association créée par les étudiants de Montbéliard, pour tous les étudiants de l'agglomération du pays de Montbéliard.
          <span class="span-block"></span>
          <span class="span-block"></span>
          Notre but ? Rassembler tous les étudiants, peu importe leur établissement ou leur filière, autour de différents projets.
          <span class="span-block"></span>
          <span class="span-block"></span>
          Des soirées, des évènements sportifs, culturels ou tout simplement des échanges entre étudiants, tout est prévu pour améliorer votre vie sur le campus !
          <span class="span-block"></span>
          <span class="span-block"></span>
          Nous participons à des gros projets mis en place par nos partenaires, mais nous créons également nos propres projets, et nous vous aidons à concrétiser les vôtres !
          <span class="span-block"></span>
          <span class="span-block"></span>
          Nous possédons également un local, où vous pourrez venir vous détendre, manger, travailler et rencontrer de nouvelles personnes !
          <span class="span-block"></span>
          <span class="span-block"></span>
          Où nous trouver ? C'est simple : Sur le campus des portes du Jura, entre le grand amphi et le bâtiment DUT Mesures Physiques.
          <span class="span-block"></span>
          <span class="span-block"></span>
          Notre équipe vous accueillera tous les midis, avec le sourire, bien entendu !

          Vous voulez en savoir plus sur notre équipe et nos projets ? C'est juste ici !</p>
        <iframe src="https://snazzymaps.com/embed/344805" width="100%" height="600px" style="border:none;"></iframe>
      </div>

      <div class="list_team">
        <h2 class="title_underline">Notre équipe</h2>
        <ul>
          <li v-for="membre in bureaureverse" :key="membre" class="membre_team">
            <div>
              <img :src="membre.acf.image_membre.url" :alt="membre.acf.prenom_nom_membre">
              <div class="info_personne_team">
                <p class="prenom_team">{{membre.acf.prenom_nom_membre}}</p>
                <p class="poste_team">{{membre.acf.intitule_poste}}</p>
              </div>
            </div>

          </li>
        </ul>
      </div>

      <div class="benevoles">
        <h2 class="title_underline">Les bénévoles</h2>
        <img src="@/assets/img_events/Coursez-votre-inte-23.png" class="img_benevoles" alt="les bénévoles">
        <p>
          La MéMO ne serait rien sans bénévoles. Notre équipe et toutes les personnes qui nous aident à faire vivre l'association sont des étudiants bénévoles.
          <span class="span-block"></span>
          Grace à tous ces bénévoles nous pouvons vous accueillir dans notre local, vous proposer un lieu d'échange et de détente, mais également réaliser de nombreux projets !
          <span class="span-block"></span>
          Vous pouvez également nous rejoindre et faire parti des bénévoles pour contribuer à la vie étudiante sur le campus, et dans l'agglomération du pays de Montbéliard
        </p>
      </div>

      <div class="nos_projet" style="margin-bottom: 60px">
        <h2 class="title_underline">Nos projets</h2>
        <img src="@/assets/img_events/banniere_events.png" class="img_projets" alt="nos projets">
        <p>Le but de la MéMO est de rassembler les étudiants autour de différents projets, ces derniers peuvent prendre différentes formes.
          <span class="span-block"></span>
          Si vous êtes étudiant et que vous souhaitez organiser un petit évènement sur le campus, la MéMO peut vous accompagner pour le mettre en place. Notre local permet également d'avoir un lieu pour pouvoir le réaliser.
          <span class="span-block"></span>
          Notre association monte également des projets elle même, projets concrétisés grâce à l'aide de nos nombreux bénévoles toujours prêts à nous épauler.
          <span class="span-block"></span>
          Des soirées, des évènements culturels, sportifs ou bien tout simplement des échanges entre les étudiants, nous mettons tout en œuvre pour améliorer votre vie étudiante !
          <span class="span-block"></span>
          La MéMO participe également à de plus gros évènements organisés par nos partenaires où nous avons l'occasion de les épauler lors de la mise en œuvre de ceux-ci.
          <span class="span-block"></span>
          <span class="span-block"></span>
          En plus des projets, nous bénéficions d'un local dans lequel notre équipe vous accueille chaque midi. <span class="span-block"></span>
          La MéMO se veut être un lieu convivial où vous pouvez vous détendre et faire de nombreuses activités, mais également manger, ou bénéficier d'un espace de travail.
          <span class="span-block"></span>
          Quoi qu'il en soit, nous vous accueillerons toujours à bras ouverts !
        </p>
      </div>

      <div class="nous_contacter" style="margin-bottom: 60px">
        <h2 class="title_underline">Nous contacter</h2>
        <p>Via e-mail : <a href="mailto:association.memo@gmail.com">association.memo@gmail.com</a></p>
        <p>Via nos réseaux :</p>
        <ul>
          <li>Instagram : <a href="https://www.instagram.com/association.memo/" target="_blank">association.memo</a></li>
          <li>Facebook : <a href="https://www.facebook.com/assomemo2/" target="_blank">assomemo2</a></li>
        </ul>
      </div>

    </div>

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'NotreEquipe',
  data () {
    return {
      bureau: [],
      bureaureverse: []
    }
  },

  created() {
    axios.get(param.host+'bureau?per_page=100')
      .then(response => {
        // console.log("Membres bureau", response);
        this.bureau = response.data;
        this.bureaureverse = this.bureau.reverse();

      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
