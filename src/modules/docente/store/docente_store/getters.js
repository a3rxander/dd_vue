
export const getCursos =  ( state ) => (v_buscar='') => {
    console.log(state.list_cursos);
    if (v_buscar.length === 0) return state.list_cursos

    return state.list_cursos.filter(entry => entry.v_name.toLowerCase().includes(v_buscar.toLowerCase()))
}


export const getCursoId =  ( state ) => (id='') => 
{
    const entry= state.curso.find(item => item.id === id)

    if( !entry ) return

    return { ...entry}

}