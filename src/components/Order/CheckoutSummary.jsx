import React from "react";
import Burger from "../Burger/Burger";
import "./checkoutSummary.css";
import Button from "../UI/Modal/Button/Button";

const CheckoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>Delicious Burger Made with Love and Care!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <h1>Proceed to checkout?</h1>
      <Button btnType="Danger" clicked={props.cancelCheckout}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continueCheckout}>
        CONFIRM
      </Button>
    </div>
  );
};

export default CheckoutSummary;
