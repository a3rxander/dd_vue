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
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Imagen 
      </label>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    @click="m_subirfoto">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
    <input type="file"
                    @change="onSelectedImage"
                    ref="refImage"
                    v-show="false"
                    accept="image/png, image/jpeg"
                >
       <img 
            v-if="localImage"
            :src="localImage" 
            alt="entry-picture"
            class="img-thumbnail">
    </div>
  </div>
    <div class="flex items-center justify-between">
      <button   @click="saveEntry" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Crear
      </button>
    </div>
</template>

 

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'
import uploadImage from '../helpers/uploadImage'

export default {
 data(){
        return {
          d_curso:{
            v_name:null,v_desc:null,v_picture:null
          },localImage:null,
        }
    },
    computed:{
     
    },
    methods : {
        ...mapActions('docente_storevuex', ['storeCurso']),

        async saveEntry()
        {
          new Swal({
                title: 'Espere por favor',
                allowOutsideClick: false
            })
            
          Swal.showLoading()
           
          this.d_curso.v_picture = await uploadImage( this.picture );

          const id=  await this.storeCurso( this.d_curso );
          this.$router.push({name:'docente_cursos_show', params : {id}})

          Swal.fire('Guardado', 'Entrada registrada con éxito', 'success');
        },   
        m_subirfoto() {
            this.$refs.refImage.click()
        },
        onSelectedImage( event ) {
            const file = event.target.files[0]
            if ( !file ) {
                this.localImage = null
                this.file = null
                return
            }

            this.picture = file

            const fr = new FileReader()
            fr.onload = () => this.localImage = fr.result
            fr.readAsDataURL( file )

        },
    },
    watch: {
    },
}
</script>

<style>

</style>