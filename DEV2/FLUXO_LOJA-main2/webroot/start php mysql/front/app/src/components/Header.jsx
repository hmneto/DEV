import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
    built_nav = () => (
        <ul className="navbar-nav mr-auto">
            {this.props.nav_itens.map((data) => (
                <li className="nav-item" key={data.nome_fluxo}>
                    <a
                        className="nav-link"
                        style={{ cursor: "pointer" }}
                        onClick={(a) => this.props.fluxo_escolhido(data)}
                    >
                        {data.nome_fluxo}
                    </a>
                </li>
            ))}
        </ul>
    );

    componentDidMount() {
        this.props.get_nav_fluxos();
        // const { nav_fluxos, user_connected } = this.props.header_opt;
        // console.log(nav_fluxos, user_connected);
        // nav_fluxos(user_connected)
    }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     get_registros(this.props.obj.id).then(data=>this.setState({dados:data.data}))
    // }

    //     get_header_navs(this.props.obj)
    //     .then(data=>{
    //         this.props.handle_nav_itens(data.data)
    // })

    // }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link
                    to="/add-fluxo"
                    className="navbar-brand"
                    style={{ cursor: "pointer" }}
                >
                    Adicionar Fluxo
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    {this.built_nav()}
                </div>
            </nav>
        );
    }
}

export default Header;
