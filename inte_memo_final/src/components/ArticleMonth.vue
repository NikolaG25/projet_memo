<template>
  <div id="article_septembre" class="grid">
    <h2 class="title_underline">{{ currentMonth.name }}</h2>
    <p>Toutes les news du mois de {{ currentMonth.name }} 2021 sont ici !</p>
    <ul class="news_september">
      <router-link :to="{}" class="liste_news_month" v-for="news in listemois" :key="news">
        <div>
          <h2>{{ news.acf.title }}</h2>
          <p>{{ news.acf.description }}</p>
        </div>
        <img :src="news.acf.image_new.url" alt="image de la news">
      </router-link>
    </ul>

    <h2 class="title_underline" style="margin-top: 75px">Autres mois</h2>
    <ul class="liste_mois_bas" >
      <router-link v-for="month in months" :to="{name: 'ArticleMonth', params: {month : month.nbr}}" class="lien_mois" ><h2>{{ month.name }}</h2></router-link>
    </ul><button><a href="#">Autres années</a></button>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "ArticleMonth",
  data: () => {
    return {
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
      liste: [],
      listemois: [],
    }
  },
  computed: {
    listeOrderByDate: function () {
      function compare(a, b) {
        if (a.acf.date < b.acf.date) return -1;
        if (a.acf.date > b.acf.date) return 1;
        return 0;
      }
      return this.liste.sort(compare);
    },
    currentMonth() {
      return this.months.find((el)=> {
        return +this.$route.params.month === el.nbr;
      })
    }
  },

  created: function () {
    axios.get(param.host + "news?per_page=100")
      .then(response => {

        console.log("Response", response);
        this.liste = response.data;

        //récupération de l'url de la page
        let parsedUrl = new URL(window.location.href);
        console.log('url', parsedUrl);
        //découpage de la dernière partie de l'url
        let urldecomp = parsedUrl.hash.split('/');
        console.log('url decomp', urldecomp);
        this.liste.forEach(element => {
          let datedecomposee = element.acf.date.split('/');
          console.log("date decomp", datedecomposee);
          let moisnews = parseInt(datedecomposee[1]);

          console.log("mois news", moisnews);
          let mois = parseInt(urldecomp[2]);
          console.log('mois', mois);
          if (mois === moisnews) {
            console.log("mois et moisNews sont égaux ! " + mois + " et " + moisnews);

            this.listemois.push(element);
            console.log('liste mois', this.listemois)
          }
        })
        // console.log(this.listemois)

      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
