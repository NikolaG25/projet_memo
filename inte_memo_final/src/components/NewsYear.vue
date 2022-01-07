<template>
  <div id="newsyear" class="grid">
    <h2 class="title_underline">{{currentYear.name}}</h2>
    <p>Liste des news de {{currentYear.name}}</p>
    <ul class="list_news_year">
      <router-link v-for="news in listenewsyear" :to="{ name:'ExempleArticle', params : {id : news.id}}">
        <div>
          <h2>{{ news.acf.title }}</h2>
          <p>{{ news.acf.description }}</p>
        </div>
        <img :src="news.acf.image_new.url" alt="image de la news">
      </router-link>
    </ul>

    <h2 class="title_underline" style="margin-top: 75px">Autres années</h2>
    <ul class="liste_annee_bas" >
      <router-link v-for="year in years" :to="{name: 'NewsYear', params: {year : year.nbr}}" v-if="thisyear >= year.nbr" :key="year" class="lien_annee" ><h2>{{ year.name }}</h2></router-link>
    </ul>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "NewsYear",
  data: () => {
    return {
      years: [
        {nbr: 2020, name: '2020'},
        {nbr: 2021, name: '2021'},
        {nbr: 2022, name: '2022'},
        {nbr: 2023, name: '2023'},
        {nbr: 2024, name: '2024'},
        {nbr: 2025, name: '2025'},
        {nbr: 2026, name: '2026'},
        {nbr: 2027, name: '2027'},
        {nbr: 2028, name: '2028'},
        {nbr: 2029, name: '2029'},
        {nbr: 2030, name: '2030'},
        {nbr: 2031, name: '2031'},
      ],
      liste: [],
      listenewsyear: [],
      thisyear: null,
    }
  },
  computed: {
    currentYear() {
      return this.years.find((el)=> {
        return +this.$route.params.year === el.nbr;
      })
    }

  },

  created: function () {
    let dateactuelle = new Date();
    // console.log('date actuelle', dateactuelle);
    let anneeactuelle = dateactuelle.getFullYear();
    // console.log(anneeactuelle);
    this.thisyear = anneeactuelle;

    axios.get(param.host + "news?per_page=100")
      .then(response => {

        // console.log("Response", response);
        this.liste = response.data;

        //récupération de l'url de la page
        let parsedUrl = new URL(window.location.href);
        // console.log('url', parsedUrl);
        //découpage de la dernière partie de l'url
        let urldecomp = parsedUrl.hash.split('/');
        // console.log('url decomp', urldecomp);
        this.liste.forEach(element => {
          let datedecomposee = element.acf.date.split('/');
          // console.log("date decomp", datedecomposee);
          let anneenews = parseInt(datedecomposee[2]);

          // console.log("annee news", anneenews);
          let annee = parseInt(urldecomp[2]);
          // console.log('annee', annee);
          if (annee === anneenews) {
            // console.log("annee et anneenews sont égaux ! " + annee + " et " + anneenews);

            this.listenewsyear.push(element);
            // console.log('liste annee', this.listenewsyear)
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
