<template>
  <div id="main_expl_event" class="grid">
    <h2 class="title_underline">{{bonplan.acf.title}}</h2>
    <p>{{bonplan.acf.description}}</p>
    <p>{{bonplan.acf.content1}}    </p>
    <img :src="bonplan.acf.image_bon_plan.url" class="bons-plans_img" alt="image du bon plan">
    <p>{{bonplan.acf.content2}} </p>

    <button><router-link to="/listebonsPlans">Autres bons plans</router-link></button>
    <span class="span-block"></span>
    <button><router-link to="/bonsPlans">Nos partenaires</router-link></button>

    <div class="coordonnees">
      <h2 class="title_underline">Coordonnées</h2>

      <p>Partenaire</p>
      <p>{{bonplan.acf.adresse_bon_plan}}</p>
      <p>Tel : {{bonplan.acf.n_telephone}}</p>
      <button v-if="bonplan.acf.lien_site_web != null"><a :href="bonplan.acf.lien_site_web" target="_blank">Site web</a></button>

      <div class="reseaux_parts">
        <a v-if="bonplan.acf.lien_facebook != null" :href="bonplan.acf.lien_facebook"> <img src="@/assets/Icone_facebook_bleu.svg" alt="Facebook"></a>
        <a v-if="bonplan.acf.lien_insta != null" :href="bonplan.acf.lien_insta"><img src="@/assets/Icone_instagram_bleu.svg" alt="Instagram"></a>
        <a v-if="bonplan.acf.lien_twitter != null" :href="bonplan.acf.lien_twitter"> <img src="@/assets/Icone_Twitter_bleu.svg" alt="Twitter"></a>
      </div>
    </div>


  </div>
</template>

<script>
import param from '@/param/param'


export default {
  name: "ExempleBonsPlans",
  data () {
    return {
      liste: [],
      bonplan: {
        id : 0,
        acf:{
          title: null,
          description: null,
          content1: null,
          content2: null,
          image_bon_plan: null,
          date: null,
          lien_insta: null,
          lien_facebook: null,
          lien_twitter: null,
          lien_site_web: null,
          adresse_bon_plan: null,
          n_telephone: null

        },
      }
    }
  },

  created() {
    this.bonplan.id = this.$route.params.id;
    console.log("id news", this.bonplan.id);

    axios.get(param.host+"bons_plans/"+this.bonplan.id)
      .then(response => {
        console.log("reponse news", response);
        this.bonplan = response.data;
        // Mise en forme de la date => YYYY-MM-DD
        let d = this.bonplan.acf.date.split("/");
        this.bonplan.acf.date = d[2]+"-"+d[1]+"-"+d[0];
      })

    axios.get(param.host+"bons_plans?per_page=100")
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
