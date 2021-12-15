<template>
  <div id="accueil">
    <div class="img1_accueil">
      <h1>Bienvenue</h1>
      <h2>Sur le site web de la Maison des Étudiants de Montbéliard</h2>
    </div>

    <div class="grid">
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
            <div>
              <h2>News 1</h2>
              <p>Description de la news avec une courte phrase</p>
            </div>
            <img src="@/assets/img_accueil/Coursez_votre_inte.jpg" alt="Première news">
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
          <router-link :to="{}" class="first_plans">
            <div>
              <h2>{{ liste[0].acf.title }}</h2>
              <p>{{ liste[0].acf.description }}</p>
            </div>
            <img :src="liste[0].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{}" class="second_plans">
            <div>
              <h2>{{ liste[1].acf.title }}</h2>
              <p>{{ liste[1].acf.description }}</p>
            </div>
            <img :src="liste[1].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{}" class="third_plans">
            <div>
              <h2>{{ liste[2].acf.title }}</h2>
              <p>{{ liste[2].acf.description }}</p>
            </div>
            <img :src="liste[2].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
        </ul>
        <button><router-link to="bonsPlans">Voir plus</router-link></button>
      </div>
    </div>

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: "Accueil",
  data () {
    return {
      liste: []
    }
  },
  computed: {
    listeOrderByDate: function () {
      function compare(a, b) {
        if (a.acf.date > b.acf.date) return -1;
        if (a.acf.date < b.acf.date) return 1;
        return 0;
      }
      return this.liste.sort(compare);
    }
  },

  created() {
    axios.get(param.host+"bons_plans?per_page=100")
      .then(response=> {
        console.log("Response", response);
        this.liste = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

