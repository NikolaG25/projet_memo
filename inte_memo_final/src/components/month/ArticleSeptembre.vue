<template>
  <div id="article_septembre" class="grid">
    <h2 class="title_underline">Septembre</h2>
    <p>Toutes les news du mois de septembre 2021 sont ici !</p>
    <ul class="news_september">
      <router-link :to="{}" class="liste_news_month">
        <div>
          <h2>{{ liste.acf.title }}</h2>
          <p>{{ liste.acf.description }}</p>
        </div>
        <img :src="liste.acf.image_new.url" alt="image de la news">
      </router-link>

    </ul>

    <h2 class="title_underline" style="margin-top: 75px">Autres mois</h2>
    <ul class="liste_mois_bas">
      <router-link to="/ArticleJanvier"  class="background_bleu"><h2>Janvier</h2></router-link>
      <router-link to="/ArticleFevrier" class="background_bleu"><h2>Février</h2></router-link>
      <router-link to="/ArticleMars" class="background_rose"><h2>Mars</h2></router-link>
      <router-link to="/ArticleAvril" class="background_rose"><h2>Avril</h2></router-link>
      <router-link to="/ArticleMai" class="background_bleu"><h2>Mai</h2></router-link>
      <router-link to="/ArticleJuin" class="background_bleu"><h2>Juin</h2></router-link>
      <router-link to="/ArticleJuillet" class="background_rose"><h2>Juillet</h2></router-link>
      <router-link to="/ArticleAout" class="background_rose"><h2>Août</h2></router-link>
      <router-link to="/ArticleSeptembre" class="background_bleu"><h2>Septembre</h2></router-link>
      <router-link to="/ArticleOctobre" class="background_bleu"><h2>Octobre</h2></router-link>
      <router-link to="/ArticleNovembre" class="background_rose"><h2>Novembre</h2></router-link>
      <router-link to="/ArticleDecembre" class="background_rose"><h2>Décembre</h2></router-link>
    </ul>    <button><a href="#">Autres années</a></button>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "ArticleSeptembre",

  data () {
    return {
      liste: []
    }
  },

  computed: {
    listeOrderByDate: function () {
      function compare(a, b) {
        if (a.acf.date['mm' === '09'] < b.acf.date['mm' === '09']) return -1;
        if (a.acf.date['mm' === '09'] > b.acf.date['mm' === '09']) return 1;
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
