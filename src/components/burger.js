import React, { Component } from "react";
import './burger.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'lettuce': {
                stateValue = lettuce;
                break;
            }
            default: break;
        }
        if(action === 'add') {
            stateValue = stateValue + 1;
        }else {
            stateValue = stateValue - 1;
        }
        this.setState({
            [ingredient]: stateValue >= 0 ? stateValue : 0
        });
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