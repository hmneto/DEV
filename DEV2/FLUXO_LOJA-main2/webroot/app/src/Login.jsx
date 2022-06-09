import React, { Component } from "react";
// import Logincss from "./css/Login.css";
import { Link } from "react-router-dom";

class Login extends Component {
    state = {
        login: "",
        senha: ""
    };

    render() {
        return (
            <div className="container">
                <article className="card-body">
                    <h4 className="card-title text-center mb-4 mt-1">Login</h4>
                    <hr />
                    {/* <p className="text-success text-center">
                        Some message goes here
                    </p> */}
                    <form>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        {" "}
                                        <i className="fa fa-user"></i>{" "}
                                    </span>
                                </div>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    onChange={event =>
                                        this.setState({
                                            login: event.currentTarget.value
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        {" "}
                                        <i className="fa fa-lock"></i>{" "}
                                    </span>
                                </div>
                                <input
                                    className="form-control"
                                    placeholder="******"
                                    type="password"
                                    onChange={event =>
                                        this.setState({
                                            senha: event.currentTarget.value
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                onClick={e => {
                                    e.preventDefault();
                                    this.props.login(this.state);
                                }}
                            >
                                {" "}
                                Login{" "}
                            </button>
                        </div>
                        {/* <p className="text-center">
                            <a href="#" className="btn">
                                Forgot password?
                            </a>
                        </p> */}
                    </form>


                    <div className="row">
                    <Link className="col-sm underlineHover" to="/cadastro">
                        <button type="button" className="btn btn-success btn-lg btn-block">
                            Cadastro
                        </button>
                    </Link>
                    </div>



         
                </article>
            </div>
        );
    }
}

export default Login;
