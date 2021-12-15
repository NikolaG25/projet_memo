<template>
  <div id="liste_bons_plans" class="grid">
    <h2 class="title_underline">Tous les bons plans</h2>
    <p>Découvrez tous les bons plans mis en place par nos partenaires et profitez en !
    </p>
    <ul class="liste_bons_plans">
      <router-link v-for="news in listeOrderByDate" :key="news.id" class="bons_plans" :to="{}">
        <div>
          <h2>{{ news.acf.title }}</h2>
          <p>{{ news.acf.description }}</p>
        </div>
        <img :src="news.acf.image_new.url" alt="image du bon plan">
      </router-link>
      <li class="ajout_bons_plans">
        <router-link to="/createBonsPlans"><img src="../assets/img_bons_plans/croix_ajouter.svg" alt="Ajouter"></router-link>

      </li>
    </ul>

    <div class="research_news">
      <h2 class="title_underline">News par mois</h2>
      <ul>
        <router-link :to="/ArticleJanvier" class="background_bleu"><h2>Janvier</h2></router-link>
        <router-link :to="/ArticleFevrier" class="background_rose"><h2>Février</h2></router-link>
        <router-link :to="/ArticleMars" class="background_rose"><h2>Mars</h2></router-link>
        <router-link :to="/ArticleAvril" class="background_bleu"><h2>Avril</h2></router-link>
        <router-link :to="/ArticleMai" class="background_bleu"><h2>Mai</h2></router-link>
        <router-link :to="/ArticleJuin" class="background_rose"><h2>Juin</h2></router-link>
        <router-link :to="/ArticleJuillet" class="background_rose"><h2>Juillet</h2></router-link>
        <router-link :to="/ArticleAout" class="background_bleu"><h2>Août</h2></router-link>
        <router-link :to="/ArticleSeptembre" class="background_bleu"><h2>Septembre</h2></router-link>
        <router-link :to="/ArticleOctobre" class="background_rose"><h2>Octobre</h2></router-link>
        <router-link :to="/ArticleNovembre" class="background_rose"><h2>Novembre</h2></router-link>
        <router-link :to="/ArticleDecembre" class="background_bleu"><h2>Décembre</h2></router-link>
      </ul>
      <button><a href="#">Autres années</a></button>

    </div>

  </div>
</template>

<script>

import param from "@/param/param";


export default {
  name: "ListeNew",
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
    axios.get(param.host+"news?per_page=100")
      .then(response=> {
        console.log("Response", response);
        this.liste = response.data;
      })
      .catch(error => console.log(error))
  }

}
</script>

<style scoped>

</style>
