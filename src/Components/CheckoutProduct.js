import React, { forwardRef } from "react";
import "./CSS/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, title, image, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
      // remove item from basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img className="checkoutProduct__image" src={image} alt="" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>&#9733;</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
