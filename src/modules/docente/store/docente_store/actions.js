/*
export const myAction = async ({ commit }) => {}*/

import cursoAPI from "../../../../api/CursoApi";

export const loadCursos = async ({ commit }) => {

    const { data } = await cursoAPI.get('/cursos.json')

    if ( !data )
    {
        commit('setCursos', [] )
        return
    }

    const entries= [];
    for (let id of Object.keys(data))
    {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setCursos',entries)
}

export const loadCursoID = async ({ commit } , id) => {

    const { data } = await cursoAPI.get('/cursos/'+id+'.json')
    const entries= [];
        entries.push({
            id,
            ...data
        }) 

    commit('setCursoId',entries)
}

export const updateCurso = async ({ commit }, entry) => { 

    const {v_name, v_desc } = entry
    const dataToSave = { v_name, v_desc }

    const resp = await cursoAPI.put( `/cursos/${ entry.id }.json`, dataToSave )
    console.log(resp)

    // Commit de una mutation -> updateEntry
    commit('updateCurso', { ...entry })
}


export const storeCurso = async ({ commit }, entry) => { 

    const {v_name, v_desc, v_picture } = entry
    const dataToSave = { v_name, v_desc,v_picture }

    const { data } = await cursoAPI.post( '/cursos.json', dataToSave )

    console.log(data);
    
    dataToSave.id=data.name;

    // Commit de una mutation -> updateEntry
    commit('storeCurso', dataToSave)

    return data.name
}


export const deleteCurso = async ({ commit }, id) => { 

    await cursoAPI.delete(`/cursos/${ id }.json`)
    commit('deleteCurso', id)

    return id;
}

