    const INITIAL_STATE = {
            codigo: '123',
            descricao: 'Rafael',
            cargaHoraria: '20.2',
            preco: '150.50',
            categoria: "INFORMATICA",
            textoBotao: "Adicionar",
            lista: [{_id: '-1', codigo: 123, descricao: 'curso teste',}]
    }

    export default (state = INITIAL_STATE, action) =>{
        switch (action.type){
            case 'LIMPAR_FORM' : return INITIAL_STATE
            case 'ATUALIZA_CODIGO' : return {...state, codigo : action.value}
            case 'ATUALIZA_CARGA_HORARIA' : return {...state, cargaHoraria : action.value}
            case 'ATUALIZA_PRECO' : return {...state, preco : action.value}
            case 'ATUALIZA_DESCRICAO' : return {...state, descricao : action.value}
            case 'ATUALIZA_CATEGORIA' : return {...state, categoria : action.value}
            default: return state
        }
    }