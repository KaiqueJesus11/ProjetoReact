import React, { Component } from 'react';
import Cabecalho from '../../components/menu/cabecalho';
export default class Contato extends Component {
  render() {
    return (
      <div className="container">
        <Cabecalho titulo="Contato"
          subtitulo="entre em contato conosco" />
      </div>
    )
  }
}