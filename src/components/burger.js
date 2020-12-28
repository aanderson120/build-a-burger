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
                <div className="burgerIngredients">

                </div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'lettuce')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')} className="ingrBttn">Remove</button>
                    </div>
                </div>
            </>
        );
    }
}