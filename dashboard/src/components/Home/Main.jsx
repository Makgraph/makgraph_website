import React, { useEffect } from "react";
import TopTotal from "./TopTotal";
import AppStat from "./SalesStatistics";
import AppStatProducts from "./ProductStatistics";
import OrdersTable from "./OrdersTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsSlice";
// import { orderDelivered } from "./../../redux/orders/ordersSlice";

const Main = () => {
  const { orders, loading, error } = useSelector((state) => state.orders);
  const { products } = useSelector((state) => state.productsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <section className="sm:border-x-[1px] p-2 sm:p-4 border-b-secondary sm:flex sm:flex-col sm:py-4">
      <div className="">
        <p className="text-lg sm:text-2xl font-serif font-semibold">
          Dashboard
        </p>
      </div>

      <div>
        <TopTotal orders={orders} products={products} />
      </div>
      <div className="w-full justify-between sm:gap-6 md:gap-8 sm:flex">
        <AppStat />
        <AppStatProducts />
      </div>
      <div className="w-full ">
        <OrdersTable orders={orders} loading={loading} error={error} />
      </div>
    </section>
  );
};

export default Main;
