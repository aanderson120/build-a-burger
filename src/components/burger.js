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
            case 'tomato': {
                stateValue = tomato;
                break;
            }
            case 'cheese': {
                stateValue = cheese;
                break;
            }
            case 'meat': {
                stateValue = meat;
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

    burgerContent = () => {
        let {
            lettuce,
            tomato,
            cheese,
            meat
        } = this.state;

        let burger = [];

        for (let i = 0; i <lettuce; i++) {
            burger.push(<div key= {burger.length} className="lettuceSide"></div>);
        }
        return burger;

    


    }
    render() {
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()}
                    <div className ="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'lettuce')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'lettuce')} className="ingrBttn">Remove</button>
                    </div>
                    <p>Tomato</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'tomato')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'tomato')} className="ingrBttn">Remove</button>
                    </div>
                    <p>Cheese</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'cheese')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'cheese')} className="ingrBttn">Remove</button>
                    </div>
                    <p>Meat</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'meat')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'meat')} className="ingrBttn">Remove</button>
                    </div>
                </div>
            </>
        );
    }
}