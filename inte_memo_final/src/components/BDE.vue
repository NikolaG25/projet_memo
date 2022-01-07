<template>
  <div id="bde">
    <div class="img_bde main_title_screen">
      <h1>Associations étudiantes</h1>
      <h2>Qui dit Maison des Étudiants dit associations étudiantes. <span class="span-block"></span>
        Découvrez toutes les associations étudiantes et les bureaux des étudiants du campus.</h2>
      <i class="arrow down"></i>
    </div>
    <div class="grid">

      <div class="intro_bde">
        <h2 class="title_underline">Associations étudiantes</h2>
        <p>Qui dit Maison des Étudiants dit associations étudiantes. <span class="span-block"></span>
          Découvrez toutes les associations étudiantes et les bureaux des étudiants du campus.</p>
      </div>

      <div class="les_ae">
        <h2 class="title_underline">Voir les AE</h2>
        <ul>
          <router-link v-for="ae in listeae" :to="{name: 'BDEmmi', params : {id : ae.id}}">
            <h2>{{ae.acf.name}}</h2>
          </router-link>
          <!--        <li class="background_bleu">-->
          <!--          <h2>MMI</h2>-->
          <!--        </li>-->
          <!--        <li class="background_rose">-->
          <!--          <h2>R&T</h2>-->
          <!--        </li>-->
          <!--        <li class="background_rose">-->
          <!--          <h2>ae UTBM</h2>-->
          <!--        </li>-->
          <!--        <li class="background_bleu">-->
          <!--          <h2>Ameki</h2>-->
          <!--        </li>-->
          <!--        <li class="background_bleu">-->
          <!--          <h2>MP</h2>-->
          <!--        </li>-->
          <!--        <li class="background_rose">-->
          <!--          <h2>GACO</h2>-->
          <!--        </li>-->
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import param from "@/param/param";

export default {
  name: 'BDE',
  data () {
    return {
      listeae: []
    }
  },
  created() {
    axios.get(param.host+"bde?per_page=100")
      .then(response=> {
        // console.log("Response", response);
        this.listeae = response.data;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>
