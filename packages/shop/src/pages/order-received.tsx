import React from 'react';
import { SEO } from 'components/seo';
import OrderReceived from 'features/order-received/order-received';

const OrderReceivedPage = () => {
  return (
    <>
      <SEO title='Invoice - Blinkkify' description='Invoice Details' />
      <OrderReceived />
    </>
  );
};

export default OrderReceivedPage;
