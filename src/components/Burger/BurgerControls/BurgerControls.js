import React from "react";
import classes from "./BurgerControls.css";
import BurgerControl from "./BurgerControl/BurgerControl";
const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Meat",
    type: "meat",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
];
const burgerControls = (props) => (
  <div className={classes.BurgerControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BurgerControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientsAdd(ctrl.type)}
        deleted={() => props.ingredientsDelete(ctrl.type)}
        disabled={props.disableInfo[ctrl.type]}
      />
    ))}
  </div>
);

export default burgerControls;
