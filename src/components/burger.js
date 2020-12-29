import React, { Component } from "react";
import './burger.css';

export default class Burger extends Component {
    state = {
        lettuce: 0,
        onion: 0,
        tomato: 0,
        pickle:0,
        cheese: 0,
        meat: 0,
    }

    addRemoveIngredient = (action, ingredient) => {
        let {
            lettuce,
            onion,
            tomato,
            pickle,
            cheese,
            meat
        } = this.state;

        let stateValue;

        switch(ingredient){
            case 'lettuce': {
                stateValue = lettuce;
                break;
            }
            case 'onion': {
                stateValue = onion;
                break;
            }            
            case 'tomato': {
                stateValue = tomato;
                break;
            }
            case 'pickle': {
                stateValue = pickle;
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
            onion,
            tomato,
            pickle,
            cheese,
            meat
        } = this.state;

        let burger = [];

        for (let i = 0; i <lettuce; i++) {
            burger.push(<div key= {burger.length} className="lettuceSide"></div>);
        }
        for (let i = 0; i <onion; i++) {
            burger.push(<div key= {burger.length} className="onionSide"></div>);
        }
        for (let i = 0; i <tomato; i++) {
            burger.push(<div key= {burger.length} className="tomatoSide"></div>);
        }
        for (let i = 0; i <pickle; i++) {
            burger.push(<div key= {burger.length} className="pickleSide"></div>);
        }
        for (let i = 0; i <cheese; i++) {
            burger.push(<div key= {burger.length} className="cheeseSide"></div>);
        }
        for (let i = 0; i <meat; i++) {
            burger.push(<div key= {burger.length} className="meatSide"></div>);
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
                    <p>Onion</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'onion')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'onion')} className="ingrBttn">Remove</button>
                    </div>
                    <p>Tomato</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'tomato')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'tomato')} className="ingrBttn">Remove</button>
                    </div>
                    <p>Pickle</p>
                    <div className="ingrBttns">
                    <button onClick={() => this.addRemoveIngredient('add', 'pickle')} className="ingrBttn">Add</button>
                    <button onClick={() => this.addRemoveIngredient('remove', 'pickle')} className="ingrBttn">Remove</button>
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