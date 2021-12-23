<template>
  <div id="events" class="grid">
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
        <li class="first_news">
          <h2>Nocturne étudiante</h2>
          <p>Retour sur la Nocturne étudiante 2021</p>
        </li>
        <li class="second_news">
          <h2>Coursez votre inté</h2>
          <p>Retour sur Coursez votre inté</p>
        </li>
        <li class="third_news">
          <h2>Paniers de légumes</h2>
          <p>Des paniers de légumes bio à moindre prix ? C'est ici !</p>
        </li>
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
</template>

<script>
import param from '@/param/param'

export default {
  name: 'Evenements',
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
        if (a.acf.date < b.acf.date) return -1;
        if (a.acf.date > b.acf.date) return 1;
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
