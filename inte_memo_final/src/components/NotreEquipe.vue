<template>
  <div id="notre_equipe" >
    <div class="img1_accueil">
      <h1>Nous découvrir</h1>
      <h2>Découvrez notre équipe et nos projets</h2>
    </div>
    <div class="grid">
      <div class="qui_sommes_nous">
        <h2 class="title_underline">Qui sommes-nous ?</h2>
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
          <li v-for="membre in bureaureverse" :key="membre">
            <div>
              <img :src="membre.acf.image_membre.url" :alt="membre.acf.prenom_nom_membre">
              <div class="info_personne_team">
                <p>{{membre.acf.prenom_nom_membre}}</p>
                <p>{{membre.acf.intitule_poste}}</p>
              </div>
            </div>

          </li>
        </ul>
      </div>

      <div class="benevoles">
        <h2 class="title_underline">Les bénévoles</h2>
        <p>
          La MéMO ne serait rien sans bénévoles. Notre équipe et toutes les personnes qui nous aident à faire vivre l'association sont des étudiants bénévoles.
          <br>
          Grace à tous ces bénévoles nous pouvons vous accueillir dans notre local, vous proposer un lieu d'échange et de détente, mais également réaliser de nombreux projets !
          <br>
          Vous pouvez également nous rejoindre et faire parti des bénévoles pour contribuer à la vie étudiante sur le campus, et dans l'agglomération du pays de Montbéliard
        </p>
      </div>

      <div class="nos_projet" style="margin-bottom: 60px">
        <h2 class="title_underline">Nos projets</h2>
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
        console.log("Membres bureau", response);
        this.bureau = response.data;
        this.bureaureverse = this.bureau.reverse();

      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
