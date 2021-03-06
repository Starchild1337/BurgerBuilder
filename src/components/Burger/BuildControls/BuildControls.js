import React from "react";
import "./BuildControls.css";
import BurgerControl from "./BurgerControl/BurgerControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BurgerControl
          key={ctrl.label}
          label={ctrl.label}
          Add={() => props.ingredientAdd(ctrl.type)}
          Remove={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.order}
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default BuildControls;
