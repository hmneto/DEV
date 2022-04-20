import React, { Component } from 'react';
import { Button } from "../../atoms/button";
import { Input } from "../../atoms/input";
export class SearchKeyword extends Component {
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <Input />
                <Button>Pesquisar</Button>
          </form>
        );
    }
}
