import bootstrapcss from "./css/bootstrap.css";
import jquery from "jquery";
import bootstrapjs from "bootstrap";
import popperjs from "popper.js";

import React, { Component } from "react";
import List from "./List";
import Header from "./components/Header";
import Add from "./Add";
import Edit from "./Edit";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Add_fluxo from "./Add_fluxo";
import { BrowserRouter, Route } from "react-router-dom";
import {
    registros_index,
    registros_editar,
    registros_salvar,
    fluxo_create,
} from "./Api";

import objeto from "./model/objeto";

class App extends Component {
    //////////////////////////////////////////////////////

    state = {
        login: false,
        nav_itens: [],
        item_escolhido: { id: undefined, nome_fluxo: "" },
        registros: [],
        lista: [],
    };

    ///////////////////////////////////////////////////////

    logar = async (email, senha) => {
        const obj = new objeto();
        const { user_connected } = await obj.login(email, senha);
        this.setState({ login: user_connected });
    };

    ///////////////////////////////////////////////////////

    get_nav_fluxos = async () => {
        const obj_nav = new objeto()
        const { login } = this.state;
        const { nav_itens } = await obj_nav.get_nav_fluxo(login)
        this.setState({ nav_itens });
    };

    ///////////////////////////////////////////////////////

    add_fluxo = (b) => {
        const form = new FormData();
        form.append("login", this.state.login);
        form.append("fluxo", b);
        fluxo_create(form).then((a) => {
            console.log(a.data);
            window.history.back();
        });
    };

    fluxo_escolhido = async (o) => {
        const form = new FormData();
        form.append("id_fluxo", o.id);
        const a = await registros_index(form);
        this.setState({
            item_escolhido: { id: o.id, nome_fluxo: o.nome_fluxo },
        });
        this.setState({ registros: a.data.reverse() });
        this.setState({ lista: a.data });
    };

    obterData = (dado) => dado.data.substr(0, 10).split("-")[1];

    escolhe_mes = (o) => {
        console.log(o);
        const a = this.state.lista.filter((dado_registro) => {
            if (this.obterData(dado_registro) === o) return true;
            if (o === 0) return true;
        });
        this.setState({ registros: a });
    };

    editar = (o) =>
        registros_editar({ obj: o, login: this.state.login }).then((data) =>
            console.log(data.data)
        );

    built_list = () => {
        return this.state.nav_itens
            .filter((item) => {
                if (item.id === this.state.item_escolhido.id) return true;
            })
            .map((item) => (
                <Route
                    exact
                    key={item}
                    render={(props) => (
                        <List
                            {...props}
                            obj={item}
                            escolhe_mes={this.escolhe_mes}
                            registros={this.state.registros}
                        />
                    )}
                    path="/"
                />
            ));
    };

    salvar = (o) => {
        const form = new FormData();
        form.append("a", JSON.stringify(o));
        form.append("b", this.state.login);
        registros_salvar(form).then((data) => console.log(data.data));
    };

    render() {
        return (
            <BrowserRouter basename="/app/build">
                {!this.state.login && (
                    <Route
                        exact
                        render={(props) => (
                            <Login {...props} logar={this.logar} />
                        )}
                        path="/"
                    />
                )}

                {!this.state.login && (
                    <Route
                        exact
                        render={(props) => <Cadastro {...props} />}
                        path="/cadastro"
                    />
                )}

                {this.state.login && (
                    <Route
                        exact
                        render={(props) => (
                            <Header
                                {...props}
                                nav_itens={this.state.nav_itens}
                                get_nav_fluxos={this.get_nav_fluxos}
                                fluxo_escolhido={this.fluxo_escolhido}
                            />
                        )}
                        path="/"
                    />
                )}

                {this.state.login && (
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <h1 style={{ textAlign: "center" }}>
                                {this.state.item_escolhido.nome_fluxo}
                            </h1>
                        )}
                    />
                )}

                {this.state.login && (
                    <Route
                        render={(props) => (
                            <Add_fluxo
                                add_fluxo={this.add_fluxo}
                                obj={this.state}
                            />
                        )}
                        path="/add-fluxo"
                    />
                )}

                {this.state.login && this.built_list()}

                {this.state.login && (
                    <Route
                        render={(props) => (
                            <Edit
                                {...props}
                                login={this.state.login}
                                editar={this.editar}
                                fluxo_escolhido={this.fluxo_escolhido}
                                fluxos={this.state.nav_itens}
                                item_escolhido={this.state.item_escolhido}
                            />
                        )}
                        path="/edit"
                    />
                )}

                {this.state.login && (
                    <Route
                        exact
                        render={(props) => (
                            <Add
                                {...props}
                                salvar={this.salvar}
                                obj={this.state}
                                item_escolhido={this.state.item_escolhido}
                                fluxo_escolhido={this.fluxo_escolhido}
                            />
                        )}
                        path="/add"
                        key="add"
                    />
                )}
            </BrowserRouter>
        );
    }
}

export default App;
