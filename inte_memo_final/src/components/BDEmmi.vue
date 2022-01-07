<template>
  <div id="bde_mmi" class="grid">
    <h1 class="title_underline" style="margin-top: 50px">{{ae.acf.name}}</h1>
    <p>{{ae.acf.description1}}</p>
    <img class="img_90" :src="ae.acf.image_ae.url" alt="BDE MMI">
    <p>{{ae.acf.description2}} </p>

    <div class="coordonnees_bde">
      <h2 class="title_underline">Coordonnées</h2>
      <button v-if="ae.acf.lien_site_web != null"><a :href="ae.acf.lien_site_web" target="_blank">Site web</a></button>

      <div class="reseaux_parts">
        <a v-if="ae.acf.lien_facebook != null" :href="ae.acf.lien_facebook"><img src="@/assets/Icone_facebook_bleu.svg" alt="Facebook"></a>
        <a v-if="ae.acf.lien_insta != null" :href="ae.acf.lien_insta"><img src="@/assets/Icone_instagram_bleu.svg" alt="Instagram"></a>
        <a v-if="ae.acf.lien_twitter != null" :href="ae.acf.lien_twitter"><img src="@/assets/Icone_Twitter_bleu.svg" alt="Twitter"></a>
      </div>
    </div>

    <div class="equipe_bde">
      <h2 class="title_underline" style="margin-top: 50px">Équipe</h2>
      <ul class="membres_bde">
        <li class="president">
          <img :src="ae.acf.image_president.url" alt="Président">
          <div class="info_membre_bre">
            <p>{{ae.acf.nom_prenom_president}}</p>
            <p>Président</p>
          </div>
        </li>
        <li class="vice_pre">
          <img :src="ae.acf.image_vice_president.url" alt="Vice-Président">
          <div class="info_membre_bre">
            <p>{{ae.acf.nom_prenom_vice_president}}</p>
            <p>Vice-Président</p>
          </div>
        </li>
        <li class="treso">
          <img :src="ae.acf.image_tresorier.url" alt="Trésorier">
          <div class="info_membre_bre">
            <p>{{ae.acf.nom_prenom_tresorier}}</p>
            <p>Trésorier</p>
          </div>
        </li>
      </ul>
    </div>

    <button style="margin-top: 25px"><router-link to="/BDE">Autres associations</router-link></button>
  </div>
</template>

<script>
import param from '@/param/param'

export default {
  name: "BDEmmi",
  data () {
  return {
    liste: [],
    ae: {
      id: 0,
      acf: {
        name: null,
        description1: null,
        description2: null,

        image_ae: null,
        lien_insta: null,
        lien_facebook: null,
        lien_twitter: null,
        lien_site_web: null,

        image_vice_president: null,
        image_president: null,
        image_tresorier: null,

        nom_prenom_president: null,
        nom_prenom_vice_president: null,
        nom_prenom_tresorier: null,

      }
    }
  }
  },
  created() {
    this.ae.id = this.$route.params.id;
    // console.log("id ae", this.ae.id);

    axios.get(param.host+"bde/"+this.ae.id)
      .then(response => {
        // console.log("reponse news", response);
        this.ae = response.data;
      })

    axios.get(param.host+"bde?per_page=100")
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
