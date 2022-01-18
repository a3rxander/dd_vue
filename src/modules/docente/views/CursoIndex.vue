<template>
    <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <CursoCreate icon="dasdasdsds"></CursoCreate>
        <EstudianteLista></EstudianteLista>
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default({
 
 components:{
   EstudianteLista:defineAsyncComponent(()=> import ('../components/EstudianteLista')),
   CursoCreate:defineAsyncComponent(()=> import ('../components/CursoCreate'))
 }
})
</script>