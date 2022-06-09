import './css/bootstrap.css'
import 'jquery'
import 'bootstrap'
import 'popper.js'

import React, { Component } from 'react';
import List from './List';
import Header from "./components/Header";
import Add from './Add'
import Edit from './Edit'
import Login from './Login'
import Cadastro from './Cadastro'
import Add_fluxo from './Add_fluxo'
import { BrowserRouter, Route } from "react-router-dom";
import { registros_index, fluxo_index, registros_editar, registros_salvar } from "./Api";
import LoginClass from './models/LoginClass'

export default class App extends Component {
  state = {
    login: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJobW5ldG9uQGdtYWlsLmNvbSIsInNlbmhhIjoiNTVhNWU5ZTc4MjA3YjRkZjg2OTlkNjA4ODZmYTA3MDA3OTQ2MzU0N2IwOTVkMWEwNWJjNzE5YmI0ZTZjZDI1MSJ9.D19LffPqaL62lbGBNpt8HSj9-Ph2QQ31OGWtKYghKZo',
    // login: undefined,
    nav_itens: [],
    item_escolhido: { id: undefined, nome_fluxo: '' },
    registros: [],
  }

  constructor(props) {
    super(props)
    this.func_login = this.func_login.bind(this)
    this.salvar = this.salvar.bind(this)
  }

  async func_login(userAndPassComeFromLoginJsx) {
    const loginClass = new LoginClass
    const loginJSONToken = await loginClass.login(userAndPassComeFromLoginJsx)
    if (loginJSONToken) this.setState({ login: loginJSONToken });
    else { alert('erro no login') }
  }

  nav_fluxos = () => {
    const { login } = this.state
    fluxo_index(login)
      .then(data => {
        // console.log(data.data)
        this.setState({ nav_itens: data.data })
      })
  }

  fluxo_escolhido = async (o) => {
    const { id, nome_fluxo } = o
    // console.log(id)
    const retornoRegistross = await registros_index(o.id)
    // console.log(retornoRegistross.data)
    this.setState({ registros: retornoRegistross.data.reverse() })
    const item_escolhido = {
      id,
      nome_fluxo
    }
    this.setState({
      item_escolhido
    })
  }

  obterData = dado => {
    let dadoRetornado = {}
    dadoRetornado.mes = dado.data.substr(0, 10).split("-")[1];
    dadoRetornado.ano = dado.data.substr(0, 10).split("-")[0];
    return dadoRetornado
  }

  escolhe_mes = (o) => {
    const a = this.state.registros.filter(dado_registro => {
      console.log(dado_registro)
      console.log(o)
      if (this.obterData(dado_registro) === o) return true
      if (o === 0) return true;
    })
    console.log(a)
    // this.setState({ registros: a })
  }

  editar = (o) => {
    registros_editar({ obj: o, login: this.state.login })
  }

  built_list = () => {
    const listaRetornada = this.state.nav_itens
      .filter(item => { if (item.id === this.state.item_escolhido.id) return true })
      .map(item => <Route exact key={item} render={(props => <List {...props}
        obj={item}
        escolhe_mes={this.escolhe_mes}
        registros={this.state.registros}
      />)} path="/" />)
    return listaRetornada
  }

  async salvar(o) {
    registros_salvar({ a: o, b: this.state.login })
  }

  render() {
    return (
      <BrowserRouter basename="/app/build/index.html">

        {!this.state.login &&
          <Route exact render={(props => <Login {...props}
            login={this.func_login} />)} path="/" />}

        {!this.state.login &&
          <Route exact render={props => <Cadastro {...props} />} path="/cadastro" />}

        {this.state.login &&
          <Route exact render={(props => <Header {...props}
            obj={this.state}
            func_nav_fluxos={this.nav_fluxos}
            func_fluxo_escolhido={this.fluxo_escolhido}
          />)} path="/" />}

        {this.state.login &&
          <Route exact path="/" render={props => <h1 style={{ textAlign: 'center' }}>{this.state.item_escolhido.nome_fluxo}</h1>} />}

        {this.state.login &&
          <Route render={props => <Add_fluxo obj={this.state} />} path="/add-fluxo" />}

        {this.state.login && this.built_list()}

        {this.state.login && <Route render={props => <Edit {...props}
          login={this.state.login}
          editar={this.editar}
          fluxo_escolhido={this.fluxo_escolhido}
          fluxos={this.state.nav_itens}
          item_escolhido={this.state.item_escolhido}
        />} path="/edit" />}

        {this.state.login && <Route exact render={props => <Add {...props}
          salvar={this.salvar} obj={this.state}
          item_escolhido={this.state.item_escolhido}
          fluxo_escolhido={this.fluxo_escolhido}
        />} path="/add" key="add" />}

      </BrowserRouter>
    );
  }
}