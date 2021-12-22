<template>


  <div id="good_plans">
    <div class="img_bons_plans">
      <h1>Bons plans</h1>
      <h2>Grace à nos partenaires, nous vous proposons des bons plans dans toute la ville.
        Quels sont ces avantages ? Qui sont nos partenaires ?
        Découvrez-le juste ici !</h2>
    </div>
    <div class="grid">
      <div class="intro_good_plans" >
        <h2 class="title_underline">Bons plans</h2>
        <p>Grace à nos partenaires, nous vous proposons des bons plans dans toute la ville.
          <br/><br/>Quels sont ces avantages ? Qui sont nos partenaires ?
          <br/><br/>Découvrez-le juste ici !</p>
      </div>
      <div class="devenir_adherent">
        <h2 class="title_underline">Devenir adhérent</h2>
        <p>Vous souhaitez profiter des bons plans ? Devenez adhérent et recevez votre carte MéMO pour bénéficier de nombreuses réductions dans toute la ville !
          <br><br>
          Profitez-en dès maintenant en commandant votre carte !
        </p>
        <img src="@/assets/img_bons_plans/carte_memo.svg" alt="Présentation de la carte de la MéMO">
        <button><router-link to="adherer">En profiter</router-link></button>
      </div>

      <div class="last_good_plans">
        <h2 class="title_underline">Derniers bon plans</h2>
        <ul>
          <router-link :to="{ name:'ExempleBonsPlans', params : {id : liste[0].id}}" class="first_plans">
            <div>
              <h2>{{ liste[0].acf.title }}</h2>
              <p>{{ liste[0].acf.description }}</p>
            </div>
            <img :src="liste[0].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{ name:'ExempleBonsPlans', params : {id : liste[1].id}}" class="second_plans">
            <div>
              <h2>{{ liste[1].acf.title }}</h2>
              <p>{{ liste[1].acf.description }}</p>
            </div>
            <img :src="liste[1].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
          <router-link :to="{ name:'ExempleBonsPlans', params : {id : liste[2].id}}" class="third_plans">
            <div>
              <h2>{{ liste[2].acf.title }}</h2>
              <p>{{ liste[2].acf.description }}</p>
            </div>
            <img :src="liste[2].acf.image_bon_plan.url" alt="image du bon plan">
          </router-link>
        </ul>

        <button><a href="#">Tous les bons plans</a></button>
      </div>

      <div class="partenaires">
        <h2 class="title_underline">Nos partenaires</h2>
        <ul>
          <li v-for="part in listepartenaire" :key="part"><img :src="part.acf.image_partenaire.url" :alt="part.acf.nom_partenaire"></li>
<!--          <li><img src="@/assets/img_bons_plans/Logo_UFR-STGI.jpg" alt="STGI"></li>-->
<!--          <li><img src="@/assets/img_bons_plans/logo_bu.jpg" alt="Bibliothèque Universitaire"></li>-->
<!--          <li><img src="@/assets/img_bons_plans/Logo_Crous.jpg" alt="Crous BFC"></li>-->
<!--          <li><img src="@/assets/img_bons_plans/Logo_UFC.jpg" alt="Université de Franche-Comté"></li>-->
<!--          <li><img src="@/assets/img_bons_plans/logo_jardins_idees.jpg" alt="Les jardins d'idées"></li>-->
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import param from "@/param/param";


export default {
  name: "BonsPlans",
  data () {
    return {
      liste: [],
      listepartenaire: [],
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
    axios.get(param.host+'partenaires?per_page=100')
    .then(response => {
      console.log("liste parts", response);
      this.listepartenaire = response.data;
    })
    .catch(error => console.log(error))

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
