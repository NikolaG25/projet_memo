<template>
  <div id="devenir_adherent" class="grid">
    <h2 class="title_underline">Devenir adhérent</h2>
    <p>Vous souhaitez profiter des bons plans en devenant adhérent à la MéMO ? Vous êtes au bon endroit ! <span class="span-block"></span>
      Pour devenir adhérent et profiter de réductions au bar de la MéMO mais également partout dans la ville, commandez dès maintenant votre carte.
      <span class="span-block"></span><span class="span-block"></span>
      Pour cela, rien de plus simple, il vous faut 3 euros, et renseigner vos coordonnées juste ici et le tour est joué !
      <span class="span-block"></span><span class="span-block"></span>
      Vous pourrez alors venir récupérer votre carte à notre local et profiter de tous ses avantages</p>
    <img src="@/assets/img_bons_plans/carte_memo.svg" alt="Image de la carte de la MéMO">
    <button><a href="https://www.helloasso.com/" target="_blank">Adhérer</a></button>
    <p>Déjà adhérent ? Renseignez-vous sur les bons plans et les avantages de votre carte !</p>
    <button><router-link to="/bonsPlans">Les bons plans</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'Adherer'
}
</script>

<style scoped>

</style>
