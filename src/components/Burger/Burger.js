import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
const burger = (props) => {
  let tranformIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (tranformIngredients.length === 0) {
    tranformIngredients = <p>Please add some ingredient!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
