<template>
  <div id="liste_news" class="grid">
    <h2 class="title_underline">Toutes les news</h2>
    <p>Découvrez toutes les news !
    </p>
    <ul class="liste_news">
      <router-link v-for="news in listeOrderByDate" :key="news.id" class="news" :to="{ name:'ExempleArticle', params : {id : news.id}}">
        <div>
          <h2>{{ news.acf.title }}</h2>
          <p>{{ news.acf.description }}</p>
        </div>
        <img :src="news.acf.image_new.url" alt="image de la news">
      </router-link>
    </ul>

    <div class="research_news">
      <h2 class="title_underline">News par mois</h2>
      <ul class="liste_mois_bas">
        <router-link v-for="month in months" :to="{name: 'ArticleMonth', params: {month : month.nbr}}" class="lien_mois" ><h2>{{ month.name }}</h2></router-link>
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
      liste: [],
      months: [
        {nbr: 1, nbrmois: '01',  name: 'Janvier'},
        {nbr: 2, nbrmois: '02', name: 'Février'},
        {nbr: 3, nbrmois: '03', name: 'Mars'},
        {nbr: 4, nbrmois: '04', name: 'Avril'},
        {nbr: 5, nbrmois: '05', name: 'Mai'},
        {nbr: 6, nbrmois: '06', name: 'Juin'},
        {nbr: 7, nbrmois: '07', name: 'Juillet'},
        {nbr: 8, nbrmois: '08', name: 'Aout'},
        {nbr: 9, nbrmois: '09', name: 'Septembre'},
        {nbr: 10, nbrmois: '10', name: 'Octobre'},
        {nbr: 11, nbrmois: '11', name: 'Novembre'},
        {nbr: 12, nbrmois: '12', name: 'Décembre'},
      ],
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
