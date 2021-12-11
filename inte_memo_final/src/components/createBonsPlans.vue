<template>
  <div id="create_bon_plan" class="grid">
    <form @submit.prevent="creer">
      <span>Titre</span>
      <input type="text" class="titre_bons_plans" placeholder="Titre du bon plan"
      v-model="bons_plans.acf.title" required>
    </form>
  </div>
</template>

<script>
export default {
  name: "createBonsPlans"
}
</script>

<style scoped>

</style>
