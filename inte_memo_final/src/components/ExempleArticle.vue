<template>
  <div id="main_expl_event" class="grid">
    <h2 class="title_underline">{{news.acf.title}}</h2>
    <p>{{news.acf.description}}</p>
    <p class="small_text">Par {{news.acf.author}} <span class="span-block"></span> Publié le {{news.acf.date}}</p>
    <p>{{news.acf.content1}}</p>
    <img :src="news.acf.image_new.url" class="event_img" alt="Photo de Coursez votre inté">
    <p>{{news.acf.content2}} </p>

    <h2 class="title_underline">Article suivant</h2>
    <router-link :to="{ name:'ExempleArticle', params : {id : liste[1].id}}" class="next_news">
      <div>
        <h2>{{ liste[1].acf.title }}</h2>
        <p>{{ liste[1].acf.description }}</p>
      </div>
      <img :src="liste[1].acf.image_new.url" alt="image dde la news">
    </router-link>
    <button><router-link to="/evenements">Tous les articles</router-link></button>

  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "ExempleArticle",
  data () {
    return {
      liste: [],
      news: {
        id : 0,
        acf:{
          title: null,
          description: null,
          content1: null,
          content2: null,
          image_new: null,
          date: null,
          author: {
            ID: 0,
            user_firstname: null,
            user_lastname: null,
          }

        },
      }
    }
  },

  created() {
    this.news.id = this.$route.params.id;
    // console.log("id news", this.news.id);

    axios.get(param.host+"news/"+this.news.id)
    .then(response => {
      // console.log("reponse news", response);
      this.news = response.data;
      // Mise en forme de la date => YYYY-MM-DD
      let d = this.news.acf.date.split("/");
      this.news.acf.date = d[2]+"-"+d[1]+"-"+d[0];
    })

    axios.get(param.host+"news?per_page=100")
      .then(response=> {
        // console.log("Response", response);
        this.liste = response.data;
      })
      .catch(error => console.log(error))

  }

}
</script>

<style scoped>

</style>
