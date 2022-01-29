<template>    
    <CursoStore></CursoStore>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    props:{
        id:{
            type:String,
            required:true,
        },
    },
   
    methods : {

    },
    
 components:
 {
    CursoStore:defineAsyncComponent(()=> import ('../components/CursoStore'))
 },
created()
    {
       
    }, 
 
}
</script>
