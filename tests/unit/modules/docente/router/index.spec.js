import docenteRouter from '@/modules/docente/router'


describe('Pruebas en el router module del Docente', () => {
    
    test('el router debe de tener esta configuración', async() => {
        
        expect( docenteRouter ).toMatchObject({
                name: 'docente',
                component: expect.any( Function ),
                children: [
                    {
                        path: '',
                        name: 'docente_index',
                        component: expect.any( Function ),
                    },
                    {
                        path: 'cursos',
                        name: 'docente_cursos_index',
                        component: expect.any( Function ),
                    },
                    {
                        path:'cursos/create',
                        name:'docente_cursos_create',
                        component: expect.any( Function ),
                    },
                    {
                        path: 'cursos/:id',
                        name: 'docente_cursos_show',
                        component: expect.any( Function ),
                        props: expect.any( Function )
                    }
                ]
        })

        // expect( (await docenteRouter.children[0].component()).default.name  ).toBe('NoEntrySelected')
        // expect( (await docenteRouter.children[1].component()).default.name  ).toBe('EntryView')
        const promiseRoutes = []
        docenteRouter.children.forEach( child => promiseRoutes.push( child.component() ) )

        const routes = (await Promise.all( promiseRoutes )).map( r => r.default.name )

        console.log(routes);
        expect( routes ).toContain('CursoIndex')
        expect( routes ).toContain('CursoShow')


    })


    test('debe de retornar el id de la ruta', () => {
        
        const route = {
            params: {
                id: 'ABC-123'
            }
        }

        // expect( docenteRouter.children[1].props( route ) ).toEqual({ id: 'ABC-123' })
        const entryRoute = docenteRouter.children.find( route => route.name === 'docente_cursos_show' )
        expect( entryRoute.props( route ) ).toEqual({ id: 'ABC-123' })
    })
    


    

})
