<template>
  <div id="events">
    <div class="img_event">
      <h1>Évènements</h1>
      <h2>Si vous voulez être au courant des évènements à venir ou bien consulter les dernières news, vous êtes au bon endroit !</h2>
    </div>
    <div class="grid">
      <div class="intro_event">
        <h2 class="title_underline">Évènements</h2>
        <p>Si vous voulez être au courant des évènements à venir ou bien consulter les dernières news, vous êtes au bon endroit !</p>
      </div>
      <div class="last_news">
        <h2 class="title_underline">Dernières news</h2>
        <ul>
          <router-link :to="{ name:'ExempleArticle', params : {id : liste[0].id}}" class="first_news">
            <div>
              <h2>{{ liste[0].acf.title }}</h2>
              <p>{{ liste[0].acf.description }}</p>
            </div>
            <img :src="liste[0].acf.image_new.url" alt="image de la news">
          </router-link>
          <router-link :to="{ name:'ExempleArticle', params : {id : liste[1].id}}" class="second_news">
            <div>
              <h2>{{ liste[1].acf.title }}</h2>
              <p>{{ liste[1].acf.description }}</p>
            </div>
            <img :src="liste[1].acf.image_new.url" alt="image de la news">
          </router-link>
          <router-link :to="{ name:'ExempleArticle', params : {id : liste[2].id}}" class="third_news">
            <div>
              <h2>{{ liste[2].acf.title }}</h2>
              <p>{{ liste[2].acf.description }}</p>
            </div>
            <img :src="liste[2].acf.image_new.url" alt="image de la news">
          </router-link>

        </ul>
      </div>

      <div class="this_month">
        <h2 class="title_underline">Ce mois-ci</h2>
        <ul>
          <router-link v-for="news in listenewsmonth" :to="{ name:'ExempleArticle', params : {id : news.id}}" class="third_news">
            <div>
              <h2>{{ news.acf.title }}</h2>
              <p>{{ news.acf.description }}</p>
            </div>
            <img :src="news.acf.image_new.url" alt="image de la news">
          </router-link>

        </ul>

        <button><router-link  to="/listeNews">Voir plus</router-link></button>
      </div>

      <div class="research_news">
        <h2 class="title_underline">Rechercher une news</h2>
        <ul class="liste_mois_cote">
          <router-link v-for="month in months" :to="{name: 'ArticleMonth', params: {month : month.nbr}}" class="lien_mois" ><h2>{{ month.name }}</h2></router-link>
        </ul>
        <button><a href="#">Autres années</a></button>

      </div>
    </div>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Evenements',
  data () {
    return {
      liste: [],
      listenewsmonth: [],
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
      thismonth: null,
    }
  },

  created() {
    let dateactuelle = new Date();
    console.log('date actuelle', dateactuelle);
    let moisactuel = dateactuelle.getMonth() + 1 ;
    console.log(moisactuel);
    this.thismonth = moisactuel;

    axios.get(param.host+"news?per_page=100")
    .then(response=> {
      console.log("Response", response);
      this.liste = response.data;

      this.liste.forEach(element => {
        let datedecomposee = element.acf.date.split('/');
        console.log("date decomp", datedecomposee);
        let moisnews = parseInt(datedecomposee[1]);
        console.log("mois news", moisnews);

        let mois = parseInt(this.thismonth);

        if (mois === moisnews) {
          this.listenewsmonth.push(element);
          console.log('liste news mois', this.listenewsmonth)
        }
      })
    })
    .catch(error => console.log(error))
  }
 }
</script>

<style scoped>

</style>
