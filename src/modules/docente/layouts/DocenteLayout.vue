<template>

<div class="min-h-full">
  <NavBar></NavBar>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Estudiantes
      </h1>
    </div>
  </header>
  <router-view/>
</div>

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default({
 
 components:{
   NavBar:defineAsyncComponent(()=> import ('../components/NavBar')),
 }
})
</script>
