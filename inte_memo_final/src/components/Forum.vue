<template>
  <div id="forum" class="grid">
    <div class="intro_forum">
      <h2 class="title_underline">Forum</h2>
      <p>Bienvenue sur le forum des étudiants. Ici vous pourrez échanger directement avec l'équipe de la MéMO, mais également avec vos amis.
        <span class="span-block"></span>Bien entendu la bienveillance est le respect sont nos meilleurs amis !</p>
    </div>

    <widgetbot
      server="912634389823889438"
      channel="912731975171854366"
    ></widgetbot>

    <div class="warning-forum">
      <p>Veuillez garder un langage adapté lorsque vous rédigez vos publications.</p>
      <p>Tout message discriminatoire ou haineux sera supprimé et entrainera la sanction de son auteur.</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Forum'
}
</script>

<style scoped>

</style>
