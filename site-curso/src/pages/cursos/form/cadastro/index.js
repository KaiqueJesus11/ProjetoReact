import React from 'react'
import CursoForm from '../../form'
import CursoList from '../../List'
import axios from 'axios'
const URL = "http://localhost:3200/api/curso"
export default class Cadastro extends React.Component {
    state = { data: [] }

    componentWillMount() {
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => this.setState({ ...this.state, data: response.data }))
    }


    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm></CursoForm>
                </div>
                <div className="col-md-6">
                    <CursoList dados = {this.state.data}></CursoList>
                </div>
            </div>
        )
    }
}