import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';
import StarIcon from '@material-ui/icons/Star';

const CheckoutProduct = forwardRef(
  ({ id, title, price, rating, image, hideButton }, ref) => {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id
      });
    };

    return (
      <div ref={ref} className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title ">{title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon
                  className="checkoutProduct__ratingIcon"
                  key={i}
                  fontSize="small"
                />
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
