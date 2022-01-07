<template>
  <div id="years" class="grid">
    <h2 class="title_underline">Liste de années</h2>
    <ul class="list_years">
      <router-link v-for="year in years" v-if="thisyear >= year.nbr" :key="year" :to="{ name : 'NewsYear', params: {year : year.nbr}}">
        <h2>{{year.name}}</h2>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Years",
  data: () => {
    return {
      years: [
        {nbr: 2020, name: '2020'},
        {nbr: 2021, name: '2021'},
        {nbr: 2022, name: '2022'},
        {nbr: 2023, name: '2023'},
        {nbr: 2024, name: '2024'},
        {nbr: 2025, name: '2025'},
        {nbr: 2026, name: '2026'},
        {nbr: 2027, name: '2027'},
        {nbr: 2028, name: '2028'},
        {nbr: 2029, name: '2029'},
        {nbr: 2030, name: '2030'},
        {nbr: 2031, name: '2031'},
      ],
      liste: [],
      thisyear: null,
    }
  },
  created() {
    let dateactuelle = new Date();
    // console.log('date actuelle', dateactuelle);
    let anneeactuelle = dateactuelle.getFullYear();
    // console.log(anneeactuelle);
    this.thisyear = anneeactuelle;
  }
}
</script>

<style scoped>

</style>
