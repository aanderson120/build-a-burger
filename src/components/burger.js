import React, { Component } from "react";
import './burger.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    render() {
        return (
            <>
            Hi Burger
            </>
        );
    }
}