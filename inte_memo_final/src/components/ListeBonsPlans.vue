<template>
  <div id="liste_bons_plans" class="grid">
    <h2 class="title_underline">Tous les bons plans</h2>
    <p>Découvrez tous les bons plans mis en place par nos partenaires et profitez en !
    </p>
    <ul class="liste_bons_plans">
      <li class="Boissons_moins_cheres">
        <h2>Boissons moins chères</h2>
        <p>Profitez de vos avantages au pub O'Brian</p>
      </li>
      <li class="Habits_moins_chers">
        <h2>Habits moins chers</h2>
        <p>Profitez de vos avantages chez Frip'vie</p>
      </li>
      <li class="Menu_moins_cher">
        <h2>Menu moins cher</h2>
        <p>Ce jeudi 14 Octobre a eu lieu la nocturne étudiante au Moloco</p>
      </li>
      <li class="Reduc_patisserie">
        <h2>Réduction sur les patisseries</h2>
        <p>Profitez de vos avantages à la boulangerie</p>
      </li>
      <li class="Reduc_coiffeur">
        <h2>Réductions coiffeur</h2>
        <p>Profitez de vos avantages chez un salon de coiffure</p>
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
export default {
  name: "ListeBonsPlans"
}
</script>

<style scoped>

</style>
