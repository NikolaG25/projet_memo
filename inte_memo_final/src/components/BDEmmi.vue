<template>
  <div id="bde_mmi">
    <h1 class="title_underline" style="margin-top: 50px">BDE MMI</h1>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
      consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
      sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
      sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <img class="img_90" src="@/assets/img_ae/bde_mmi.png" alt="BDE MMI">
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </p>

    <h2 class="title_underline" style="margin-top: 50px">Équipe</h2>
    <ul class="membres_bde">
      <li class="president">
        <img src="@/assets/img_ae/president.png" alt="Président">
        <div class="info_membre_bre">
          <p>Gabriel SCRIBOT</p>
          <p>Président</p>
        </div>
      </li>
      <li class="vice_pre">
        <img src="@/assets/img_ae/vice_pre.png" alt="Vice-Président">
        <div class="info_membre_bre">
          <p>Téo GHENO</p>
          <p>Vice-Président</p>
        </div>
      </li>
      <li class="treso">
        <img src="@/assets/img_ae/tresorier.png" alt="Trésorier">
        <div class="info_membre_bre">
          <p>Jean DELÉAGE</p>
          <p>Trésorier</p>
        </div>
      </li>
    </ul>

    <h2 class="title_underline" style="margin-top: 50px">Coordonnées</h2>
    <button><a href="#">Site web</a></button>

    <div class="reseaux_parts">
      <img src="@/assets/Icone_facebook_bleu.svg" alt="Facebook"><a href="#"></a>
      <img src="@/assets/Icone_instagram_bleu.svg" alt="Instagram"><a href="#"></a>
      <img src="@/assets/Icone_Twitter_bleu.svg" alt="Twitter"><a href="#"></a>
    </div>

    <button style="margin-top: 75px"><router-link to="BDE">Autres associations</router-link></button>
  </div>
</template>

<script>
export default {
  name: "BDEmmi"
}
</script>

<style scoped>

</style>
