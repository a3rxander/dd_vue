import { createStore } from 'vuex'
import docente_storevuex from '../modules/docente/store/docente_store'

const store= createStore ( {
    modules: {
        docente_storevuex
    }

} )


export default store