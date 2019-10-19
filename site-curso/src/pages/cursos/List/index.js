import React from 'react'

export default class List extends React.Component {
    render() {

        const exibirLinhas = () => {
            //retorna a lista de props se existir
            const cursos = this.props.dados || [];
            return cursos.map(curso => (
                <tr key={curso._id}>
                    <td>{curso.codigo}</td>
                    <td>{curso.descricao}</td>
                </tr>
            ));
        }
        return (
            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}