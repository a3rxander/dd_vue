import { createStore } from 'vuex'
import docente_storeModule from '../modules/docente/store/docente_store'

const store= createStore ( {
    modules: {
        docente_storeModule
    }

} )


export default store