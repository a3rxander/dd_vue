<template>    
    <CursoUpdate :curso_id="id"></CursoUpdate>
</template>

<script>
import { mapActions } from 'vuex'
import { defineAsyncComponent } from 'vue'

export default {
    props:{
        id:{
            type:String,
            required:true,
        },
    },
   
    methods : {
      ...mapActions('docente_storevuex',['loadCursoID']),

    },
    
 components:
 {
    CursoUpdate:defineAsyncComponent(()=> import ('../components/CursoUpdate'))
 },
created()
    {
        console.log("console log created cursoshow");
        this.loadCursoID(this.id);
    },

    
    watch: {
        id() {
            this.loadCursoID(this.id);
        }
    },
 
}
</script>
