import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
const mapStateToProps = state => ({
    batatas: state.curso.lista,
});
 class List extends React.Component {
    exibirLinhas = () => {
        const cursos = this.props.batatas || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td><button className="btn btn-danger"
                    onClick={() => this.props.removerCurso(curso)}>
                    <i className="fa fa-trash-o"></i>
                </button>
                </td>
                <td>
                <button className="btn btn-success"
                    onClick={() => this.props.consultarCurso(curso)}>
                    <i className="fa fa-check"></i>
                </button>
                &nbsp;
                </td>
            </tr>
        ));
    }

    render() {

        return (
            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Excluir</th>
                            <th>Editar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default connect(mapStateToProps)(List)