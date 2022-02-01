<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1> 
  
    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
 

  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({ name: 'docente_cursos_index' })
    }
  }
  
}
</script>
 