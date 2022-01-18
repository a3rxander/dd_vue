export default{

    name: 'docente',
    component: () => import(/* webpackChunkName: "docente" */ '@/modules/docente/layouts/DocenteLayout.vue'),
    children: [
    {
        path:'',
        name:'docente_index',
        component: () => import(/* webpackChunkName: "docente_index"*/'@/modules/docente/views/Index.vue' )
    },
    {
        path:'cursos',
        name:'docente_cursos_index',
        component: () => import(/* webpackChunkName: "docente_cursos_index"*/'@/modules/docente/views/CursoIndex.vue' )
    },
    {
        path:'cursos/:id',
        name:'docente_cursos_show',
        component: () => import(/* webpackChunkName: "docente_cursos_show"*/'@/modules/docente/views/CursoShow.vue' )
    },

]
}