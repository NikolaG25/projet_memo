<template>
  <div id="liste_bons_plans" class="grid">
    <h2 class="title_underline">Tous les bons plans</h2>
    <p>Découvrez tous les bons plans mis en place par nos partenaires et profitez en !
    </p>
    <ul class="liste_bons_plans">
      <router-link v-for="news in listeOrderByDate" :key="news.id" class="bons_plans" :to="{}">
        <div>
          <h2>{{ news.acf.title }}</h2>
          <p>{{ news.acf.description }}</p>
        </div>
        <img :src="news.acf.image_new.url" alt="image du bon plan">
      </router-link>
      <li class="ajout_bons_plans">
        <router-link to="/createBonsPlans"><img src="../assets/img_bons_plans/croix_ajouter.svg" alt="Ajouter"></router-link>

      </li>

    </ul>

    <h2 class="title_underline" style="margin-top: 75px">Devenir adhérent</h2>
    <div class="adherer">
      <p>Vous souhaitez profiter nous soutenir et profiter des bons plans ? <br>
        Devenez adhérent et recevez votre carte MéMO pour bénéficier de nombreuses réductions dans toute la ville !
        <br>

        Pas encore membre ? <br>
        Profitez-en dès maintenant en commandant votre carte !</p>
      <img src="@/assets/img_bons_plans/carte_memo.svg" alt="">
      <button><router-link to="adherer">En profiter</router-link></button>
    </div>

  </div>
</template>

<script>

import param from "@/param/param";


export default {
  name: "ListeNew",
  data () {
    return {
      liste: []
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
