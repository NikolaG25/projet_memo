<template>
  <div id="accueil">
    <div class="img1_accueil main_title_screen">
      <h1>Bienvenue</h1>
      <h2>Sur le site web de la Maison des Étudiants de Montbéliard</h2>
      <i class="arrow down"></i>
    </div>

    <div class="grid">
      <div class="qui_sommes_nous">
        <h2 class="title_underline">Qui sommes-nous ?</h2>
        <p>La Maison des Étudiants de Montbéliard (MéMO) est une association créée par les étudiants de Montbéliard, pour tous les étudiants de l'agglomération du pays de Montbéliard.
          <span class="span-block"></span>Notre but ? Rassembler tous les étudiants, peu importe leur établissement ou leur filière, autour de différents projets.
          <span class="span-block"></span>Des soirées, des évènements sportifs, culturels ou tout simplement des échanges entre étudiants, tout est prévu pour améliorer votre vie sur le campus !
          <span class="span-block"></span>Nous participons à des gros projets mis en place par nos partenaires, mais nous créons également nos propres projets, et nous vous aidons à concrétiser les vôtres !
          <span class="span-block"></span>Nous possédons également un local, où vous pourrez venir vous détendre, manger, travailler et rencontrer de nouvelles personnes !
          <span class="span-block"></span>Où nous trouver ? C'est simple : Sur le campus des portes du Jura, entre le grand amphi et le bâtiment DUT Mesures Physiques.
          <span class="span-block"></span>Notre équipe vous accueillera tous les midis, avec le sourire, bien entendu !
          <span class="span-block"></span>
          <span class="span-block"></span>
          Vous voulez en savoir plus sur notre équipe et nos projets ? C'est juste ici !</p>
        <iframe src="https://snazzymaps.com/embed/344805" width="100%" height="600px" style="border:none;" accesskey="AIzaSyAWuOPeHpfWLriZx4jiHkFOFf1rzL8vLQg"></iframe>
        <button class="button_decouvrir"><router-link to="notreEquipe">Nous découvrir</router-link></button>
      </div>

      <div class="adherer">
        <p>Vous souhaitez profiter nous soutenir et profiter des bons plans ?
          <span class="span-block"></span>Devenez adhérent et recevez votre carte MéMO pour bénéficier de nombreuses réductions dans toute la ville !
          <span class="span-block"></span>
          <span class="span-block"></span>Pas encore membre ?
          <span class="span-block"></span>
          Profitez-en dès maintenant en commandant votre carte !</p>
        <img src="@/assets/img_bons_plans/carte_memo.svg" alt="">
        <button><router-link to="adherer">En profiter</router-link></button>
      </div>

      <div class="last_news">
        <h2 class="title_underline">Dernières news</h2>
        <ul>
          <router-link :to="{ name:'ExempleArticle', params : {id : listeNews[0].id}}" class="first_news">
            <div class="article_container">
              <h2>{{ listeNews[0].acf.title }}</h2>
              <p>{{ listeNews[0].acf.description }}</p>
            </div>
            <img :src="listeNews[0].acf.image_new.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{ name:'ExempleArticle', params : {id : listeNews[1].id}}" class="second_news">
            <div class="article_container">
              <h2>{{ listeNews[1].acf.title }}</h2>
              <p>{{ listeNews[1].acf.description }}</p>
            </div>
            <img :src="listeNews[1].acf.image_new.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{ name:'ExempleArticle', params : {id : listeNews[2].id}}" class="third_news">
            <div class="article_container">
              <h2>{{ listeNews[2].acf.title }}</h2>
              <p>{{ listeNews[2].acf.description }}</p>
            </div>
            <img :src="listeNews[2].acf.image_new.url" alt="image du bon plan">
          </router-link>
        </ul>
        <button class="button_see_more"><router-link to="/evenements">Voir plus</router-link></button>
      </div>

      <div class="last_good_plans">
        <h2 class="title_underline">Dernier bons plans</h2>
        <p>Restez à l'affût des derniers bons plans que l'on peut obtenir grâce à notre carte membre !
          Consultez lès et découvrez les nombreux avantages que vous avez chez nos partenaires.</p>
        <ul>
          <router-link :to="{ name:'ExempleBonsPlans', params : {id : listeBonsPlans[0].id}}" class="first_plans">
            <div class="article_container">
              <h2>{{ listeBonsPlans[0].acf.title }}</h2>
              <p>{{ listeBonsPlans[0].acf.description }}</p>
            </div>
            <img :src="listeBonsPlans[0].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{ name:'ExempleBonsPlans', params : {id : listeBonsPlans[1].id}}" class="second_plans">
            <div class="article_container">
              <h2>{{ listeBonsPlans[1].acf.title }}</h2>
              <p>{{ listeBonsPlans[1].acf.description }}</p>
            </div>
            <img :src="listeBonsPlans[1].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{ name:'ExempleBonsPlans', params : {id : listeBonsPlans[2].id}}" class="third_plans">
            <div class="article_container">
              <h2>{{ listeBonsPlans[2].acf.title }}</h2>
              <p>{{ listeBonsPlans[2].acf.description }}</p>
            </div>
            <img :src="listeBonsPlans[2].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
        </ul>
        <button><router-link to="/bonsPlans">Voir plus</router-link></button>
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
      listeBonsPlans: [],
      listeNews: []
    }
  },
  computed: {
    listeOrderByDateBonsPlans: function () {
      function compare(a, b) {
        if (a.acf.date > b.acf.date) return -1;
        if (a.acf.date < b.acf.date) return 1;
        return 0;
      }
      return this.listeBonsPlans.sort(compare);
    },
    listeOrderByDateNews: function () {
      function compare(a, b) {
        if (a.acf.date > b.acf.date) return -1;
        if (a.acf.date < b.acf.date) return 1;
        return 0;
      }
      return this.listeNews.sort(compare);
    }

  },

  created() {
    axios.get(param.host+"bons_plans?per_page=100")
      .then(response=> {
        console.log("liste bons plans", response);
        this.listeBonsPlans = response.data;
      })
      .catch(error => console.log(error))
    axios.get(param.host+"news?per_page=100")
      .then(response=> {
        console.log("liste news", response);
        this.listeNews = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

