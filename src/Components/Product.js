import React, { useState } from "react";
import "./CSS/Product.css";
import { useStateValue } from "./StateProvider";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Product({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [open, setOpen] = useState(false);

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        ContentProps={{
          className: "product__snackbar",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={
          <div className="product__snackbarMessage">
            <img src={image} />
            <div>
              <strong>Added to the basket: </strong>
              {title}
            </div>
          </div>
        }
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>&#9733;</p>
              ))}
          </div>
        </div>

        <img src={image} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </>
  );
}

export default Product;
