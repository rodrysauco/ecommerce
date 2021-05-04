import React from 'react';

import './checkout.styles.scss';

const CheckoutPage = () => (
  <div className="checkout">
    <div className="checkout__header">
      <div className="checkout__blocks">
        <span>Producto</span>
      </div>
      <div className="checkout__blocks">
        <span>Descripcion</span>
      </div>
      <div className="checkout__blocks">
        <span>Cantidad</span>
      </div>
      <div className="checkout__blocks">
        <span>Precio</span>
      </div>
      <div className="checkout__blocks">
        <span>Quitar</span>
      </div>
    </div>
  </div>
);

export default CheckoutPage;