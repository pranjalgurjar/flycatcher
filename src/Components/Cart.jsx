
export default function Cart(){

    return(<>
    <div className="cartmini__area">
  <div className="cartmini__wrapper d-flex justify-content-between flex-column">
    <div className="cartmini__top-wrapper">
      <div className="cartmini__top p-relative">
        <div className="cartmini__top-title">
          <h4>Shopping cart</h4>
        </div>
        <div className="cartmini__close">
          <button
            type="button"
            className="cartmini__close-btn cartmini-close-btn"
          >
            <i className="fal fa-times" />
          </button>
        </div>
      </div>
      <div className="cartmini__shipping">
        <p>
          {" "}
          Free Shipping for all orders over <span>$50</span>
        </p>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            data-width="70%"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </div>
      <div className="cartmini__widget">
        <div className="cartmini__widget-item">
          <div className="cartmini__thumb">
            <a href="product-details.html">
              <img src="img/product/product-1.jpg" alt="" />
            </a>
          </div>
          <div className="cartmini__content">
            <h5 className="cartmini__title">
              <a href="product-details.html">Level Bolt Smart Lock</a>
            </h5>
            <div className="cartmini__price-wrapper">
              <span className="cartmini__price">$46.00</span>
              <span className="cartmini__quantity">x2</span>
            </div>
          </div>
          <a href="#" className="cartmini__del">
            <i className="fa-regular fa-xmark" />
          </a>
        </div>
      </div>
      {/* for wp */}
      {/* if no item in cart */}
      <div className="cartmini__empty text-center d-none">
        <img src="img/product/cartmini/empty-cart.png" alt="" />
        <p>Your Cart is empty</p>
        <a href="shop.html" className="tp-btn">
          Go to Shop
        </a>
      </div>
    </div>
    <div className="cartmini__checkout">
      <div className="cartmini__checkout-title mb-30">
        <h4>Subtotal:</h4>
        <span>$113.00</span>
      </div>
      <div className="cartmini__checkout-btn">
        <a href="cart.html" className="tp-btn mb-10 w-100">
          {" "}
          view cart
        </a>
        <a href="checkout.html" className="tp-btn tp-btn-border w-100">
          {" "}
          checkout
        </a>
      </div>
    </div>
  </div>
</div>

    </>)
}