

export const setCursos = ( state, entries ) => {

    state.list_cursos = [ ...entries];
    state.isLoading=false;
}

export const setCursoId = ( state, entries ) => {

    state.curso = [ ...entries];
    state.isLoading=false;
    console.log('hecho');
}

export const updateCurso = ( state, entry  ) => 
{ 
    const idx = state.list_cursos.map( e => e.id ).indexOf( entry.id )
    state.list_cursos[idx] = entry
    console.log(state.list_cursos);  
}

export const storeCurso = (state, entry ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    state.list_cursos = [ entry, ...state.list_cursos  ]
}
