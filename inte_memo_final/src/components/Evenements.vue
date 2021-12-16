<template>
  <div id="events" class="grid">
    <div class="intro_event">
      <h2 class="title_underline">Évènements</h2>
      <p>Si vous voulez être au courant des évènements à venir ou bien consulter les dernières news, vous êtes au bon endroit !</p>
    </div>
    <div class="last_news">
      <h2 class="title_underline">Dernières news</h2>
      <ul>
        <router-link :to="{}" class="large_news">
          <div>
            <h2>{{ liste[0].acf.title }}</h2>
            <p>{{ liste[0].acf.description }}</p>
          </div>
          <img :src="liste[0].acf.image_new.url" alt="image du bon plan">
        </router-link>
<!--        <router-link :to="{}" class="small_news">-->
<!--          <div>-->
<!--            <h2>{{ liste[1].acf.title }}</h2>-->
<!--            <p>{{ liste[1].acf.description }}</p>-->
<!--          </div>-->
<!--          <img :src="liste[1].acf.image_new.url" alt="image du bon plan">-->
<!--        </router-link>-->
<!--        <router-link :to="{}" class="small_news">-->
<!--          <div>-->
<!--            <h2>{{ liste[2].acf.title }}</h2>-->
<!--            <p>{{ liste[2].acf.description }}</p>-->
<!--          </div>-->
<!--          <img :src="liste[2].acf.image_new.url" alt="image du bon plan">-->
<!--        </router-link>-->
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

      <button><a href="#">Voir plus</a></button>
    </div>

    <div class="research_news">
      <h2 class="title_underline">Rechercher une news</h2>
      <ul class="liste_mois">
        <router-link to="/ArticleJanvier"  class="background_bleu"><h2>Janvier</h2></router-link>
        <router-link to="/ArticleFevrier" class="background_rose"><h2>Février</h2></router-link>
        <router-link to="/ArticleMars" class="background_rose"><h2>Mars</h2></router-link>
        <router-link to="/ArticleAvril" class="background_bleu"><h2>Avril</h2></router-link>
        <router-link to="/ArticleMai" class="background_bleu"><h2>Mai</h2></router-link>
        <router-link to="/ArticleJuin" class="background_rose"><h2>Juin</h2></router-link>
        <router-link to="/ArticleJuillet" class="background_rose"><h2>Juillet</h2></router-link>
        <router-link to="/ArticleAout" class="background_bleu"><h2>Août</h2></router-link>
        <router-link to="/ArticleSeptembre" class="background_bleu"><h2>Septembre</h2></router-link>
        <router-link to="/ArticleOctobre" class="background_rose"><h2>Octobre</h2></router-link>
        <router-link to="/ArticleNovembre" class="background_rose"><h2>Novembre</h2></router-link>
        <router-link to="/ArticleDecembre" class="background_bleu"><h2>Décembre</h2></router-link>
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
      liste: []
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
