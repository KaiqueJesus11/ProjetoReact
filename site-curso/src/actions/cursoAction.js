import axios from 'axios';
const URL = "http://localhost:3200/api/contato";
export const alteraCodigo = e => {
    return {
        type: 'ATUALIZA_CODIGO',
        value: e.target.value
    }
}

export const alteraDescricao = e => {
    return {
        type: 'ATUALIZA_DESCRICAO',
        value: e.target.value
    }
}

export const alteraCargaHoraria = e => {
    return {
        type: 'ATUALIZA_CARGA_HORARIA',
        value: e.target.value
    }
}


export const alteraPreco= e => {
    return {
        type: 'ATUALIZA_PRECO',
        value: e.target.value
    }
}


export const alteraCategoria = e => {
    return {
        type: 'ATUALIZA_CATEGORIA',
        value: e.target.value
    }
}

export const adicionaContato = (data, nome, email, assunto) => {
    axios.post(URL, {data, nome, email, assunto})
    return {
        type: 'LIMPAR_FORM'
    }
}