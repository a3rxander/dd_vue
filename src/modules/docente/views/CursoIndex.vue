<template>
    <main>

    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <button @click="$router.push({name: 'docente_cursos_create' , params: {id:'new'}})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Nuevo Curso
  </button>
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
       <!-- <CursoCreate icon="dasdasdsds"></CursoCreate> -->
        <CursoLista></CursoLista>
      </div>
      <!-- /End replace -->
    </div>
    
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default({
 
 components:{
   CursoLista:defineAsyncComponent(()=> import ('../components/CursoLista')),
  // CursoCreate:defineAsyncComponent(()=> import ('../components/CursoCreate'))
 },
})
</script>