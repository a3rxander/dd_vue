<template>
 <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3 mb-12 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Nombre del Curso:
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  type="text" v-model="d_curso.v_name">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Descripcion
      </label>
      <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" v-model="d_curso.v_desc"></textarea>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
    <div class="flex items-center justify-between">
      <button   @click="saveEntry" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Actualizar
      </button>
      <button   @click="deleteEntry" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Eliminar
      </button>
    </div>
</template>

 

<script>

import Swal from 'sweetalert2'
import { mapGetters, mapState,mapActions } from 'vuex'

export default {
props:{
   curso_id:{
            type:String,
            required:true,
        },
},  

 data(){
        return {
          d_curso:[],
        }
    },
    computed:{
       ...mapGetters('docente_storevuex',['getCursoId']),
       
        ...mapState( 'docente_storevuex', ['curso']),
     
    },
    methods : 
    {
        ...mapActions('docente_storevuex', ['updateCurso','deleteCurso']),

        getCurso()
        {
            const r_curso= this.getCursoId( this.curso_id);
            if(!r_curso)
            {
                return this.$router.push({name:'docente_cursos_index'})
            }
            
            this.d_curso=r_curso;
        },
        async saveEntry()
        {
          new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            
            Swal.showLoading()

           await this.updateCurso( this.d_curso );
           Swal.fire('Guardado', 'Entrada registrada con éxito', 'success')
            

        }
        ,
        async deleteEntry()
        {
          const { isConfirmed } = await Swal.fire({
                title: '¿Está seguro?',
                text: 'Una vez borrado, no se puede recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if ( isConfirmed ) 
            {
              new Swal({
                  title: 'Espere por favor',
                  allowOutsideClick: false
              })
              Swal.showLoading()

              await this.deleteCurso( this.d_curso.id );
              this.$router.push({name:'docente_cursos_index'});
              Swal.fire('Eliminado','','success')
            }
        }
    },
    watch: {
        curso() {
            console.log("console log created cursoupdate");
          this.getCurso();
        }
    },
}
</script>

<style>

</style>