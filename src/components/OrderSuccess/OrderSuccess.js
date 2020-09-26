import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { cleanCart } from "../../store/action/cart";

const OrderSuccess = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanCart());
    };
  }, [dispatch]);

  return (
    <main>
      <section>
        <h2>Заказ оплачен</h2>
      </section>
    </main>
  );
};

export default OrderSuccess;
