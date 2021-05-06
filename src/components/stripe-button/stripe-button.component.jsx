import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = 'pk_test_51InvB9ARBQAoRHoq9Dh1ZVP1cHDFfDjGQzWqknZSwsyth4o9rcsWeqEkGJDdO7XUpLTDTN7VoeN36QRt436TVCuv00caNtI8qg';
  const onToken = token => {
    console.log(token);
  }
  return (
    <StripeCheckout
      label='Pagar ahora'
      name='Ecommerce'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/en/f3eb2117da'
      description={`El total es $${price}`}
      amount={priceForStripe}
      panelLabel='Pagar ahora'
      token={onToken}
      stripeKey={publishKey}
    />
  )
};

export default StripeButton;