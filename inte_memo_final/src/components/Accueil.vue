<template>
  <div id="accueil" class="grid">
    <div class="img1_accueil">
      <h1>Bienvenue</h1>
      <h2>Sur le site web de la Maison des Étudiants de Montbéliard</h2>
    </div>

    <div class="qui_sommes_nous">
      <h2 class="title_underline">Qui sommes-nous ?</h2>
      <p>La Maison des Étudiants de Montbéliard (MéMO) est une association créée par les étudiants de Montbéliard, pour tous les étudiants de l'agglomération du pays de Montbéliard.
        <br/>Notre but ? Rassembler tous les étudiants, peu importe leur établissement ou leur filière, autour de différents projets.
        <br/>Des soirées, des évènements sportifs, culturels ou tout simplement des échanges entre étudiants, tout est prévu pour améliorer votre vie sur le campus !
        <br/>Nous participons à des gros projets mis en place par nos partenaires, mais nous créons également nos propres projets, et nous vous aidons à concrétiser les vôtres !
        <br/>Nous possédons également un local, où vous pourrez venir vous détendre, manger, travailler et rencontrer de nouvelles personnes !
        <br/>Où nous trouver ? C'est simple : Sur le campus des portes du Jura, entre le grand amphi et le bâtiment DUT Mesures Physiques.
        <br/>Notre équipe vous accueillera tous les midis, avec le sourire, bien entendu !

        Vous voulez en savoir plus sur notre équipe et nos projets ? C'est juste ici !</p>
      <iframe src="https://snazzymaps.com/embed/344805" width="100%" height="600px" style="border:none;" accesskey="AIzaSyAWuOPeHpfWLriZx4jiHkFOFf1rzL8vLQg"></iframe>
      <button class="button_decouvrir"><router-link to="notreEquipe">Nous découvrir</router-link></button>
    </div>

    <div class="adherer">
      <p>Vous souhaitez profiter nous soutenir et profiter des bons plans ? <br>
        Devenez adhérent et recevez votre carte MéMO pour bénéficier de nombreuses réductions dans toute la ville !
        <br>

        Pas encore membre ? <br>
        Profitez-en dès maintenant en commandant votre carte !</p>
      <img src="@/assets/img_bons_plans/carte_memo.svg" alt="">
      <button><router-link to="adherer">En profiter</router-link></button>
    </div>

    <div class="last_news">
      <h2 class="title_underline">Dernières news</h2>
      <ul>
        <li class="first_news">
          <h2>News 1</h2>
          <p>Description de la news avec une courte phrase</p>
        </li>
        <li class="second_news">
          <h2>News 2</h2>
          <p>Description de la news avec une courte phrase</p>
        </li>
        <li class="third_news">
          <h2>News 3</h2>
          <p>Description de la news avec une courte phrase</p>
        </li>
      </ul>
      <button class="button_see_more"><router-link to="evenements">Voir plus</router-link></button>
    </div>

    <div class="last_good_plans">
      <h2 class="title_underline">Dernier bons plans</h2>
      <p>Restez à l'affût des derniers bons plans que l'on peut obtenir grâce à notre carte membre !
        Consultez lès et découvrez les nombreux avantages que vous avez chez nos partenaires.</p>
      <ul>
        <li class="good_plans_beer">
          <h2>Boissons moins chères</h2>
          <p>Profitez de vos avantages au Pub O'Brian</p>
        </li>
        <li class="good_plans_food">
          <h2>Menu moins cher</h2>
          <p>Profitez de vos avantages au Baratie burger</p>
        </li>
        <li class="good_plans_clothe">
          <h2>Habits moins chers</h2>
          <p>Profitez de vos avantages chez Frip'Vie</p>
        </li>
      </ul>
      <button><router-link to="bonsPlans">Voir plus</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accueil"
}
</script>

