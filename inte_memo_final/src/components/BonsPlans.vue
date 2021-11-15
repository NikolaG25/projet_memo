<template>
  <div>
    <div class="intro_good_plans">
      <h2>Bons plans</h2>
      <p>Grace à nos partenaires, nous vous proposons des bons plans dans toute la ville.
        <br/><br/>Quels sont ces avantages ? Qui sont nos partenaires ?
        <br/><br/>Découvrez-le juste ici !</p>
    </div>
    <div class="devenir_adherent">
      <h2>Devenir adhérent</h2>
      <p>Vous souhaitez profiter des bons plans ? Devenez adhérent et recevez votre carte MéMO pour bénéficier de nombreuses réductions dans toute la ville !
        <br><br>
        Profitez-en dès maintenant en commandant votre carte !
      </p>
      <img src="@/assets/img_bons_plans/carte_memo.svg" alt="Présentation de la carte de la MéMO">
      <button><router-link to="adherer">En profiter</router-link></button>
    </div>

    <div class="last_good_plans">
      <h2>Derniers bon plans</h2>
      <ul>
        <li class="good_plans_beer">
          <h2>Bières moins cher</h2>
          <p>Profitez de vos avantages au pub O'Brian</p>
        </li>
        <li class="good_plans_food">
          <h2>Menu moins cher</h2>
          <p>Profitez de vos avantages au Baratie burger</p>
        </li>
        <li class="good_plans_clothe">
          <h2>Habits moins cher</h2>
          <p>Profitez de vos avantages chez Frip'Vie</p>
        </li>
      </ul>
      <button><a href="#">Tous les bons plans</a></button>
    </div>

    <div class="partenaires">
      <h2>Nos partenaires</h2>
      <ul>
        <li><img src="@/assets/img_bons_plans/Logo_PMA-petit.jpg" alt="Pays de Montbéliard Agglomération"></li>
        <li><img src="@/assets/img_bons_plans/Logo_UFR-STGI.jpg" alt="STGI"></li>
        <li><img src="@/assets/img_bons_plans/logo_bu.jpg" alt="Bibliothèque Universitaire"></li>
        <li><img src="@/assets/img_bons_plans/Logo_Crous.jpg" alt="Crous BFC"></li>
        <li><img src="@/assets/img_bons_plans/Logo_UFC.jpg" alt="Université de Franche-Comté"></li>
        <li><img src="@/assets/img_bons_plans/logo_jardins_idees.jpg" alt="Les jardins d'idées"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BonsPlans'
}
</script>

<style scoped>

</style>
