import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderDelivered } from "../../redux/orders/orderDeliveredSlice";
import LoadingSpinner from "../Loadingerror/loading";
import moment from "moment";

const OrdersDetailTable = (props) => {
  const dispatch = useDispatch();
  const { order, loading } = props;
  const [localOrder, setLocalOrder] = useState(order);

  const deliveryStatus = useSelector(
    (state) => state.orderDelivered.deliveryStatus
  );
  const deliveryLoading = useSelector((state) => state.orderDelivered.loading);

  useEffect(() => {
    if (!loading && deliveryStatus) {
      setLocalOrder((prevOrder) => ({
        ...prevOrder,
        ...deliveryStatus,
      }));
    }
  }, [deliveryStatus, loading]);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  let itemsPrice = 0;
  if (!loading) {
    itemsPrice = addDecimals(
      localOrder.orderItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      )
    );
  }

  const deliverHandler = () => {
    dispatch(orderDelivered(localOrder));
  };

  return (
    <div className="overflow-x-auto">
      <div className="md:flex sm:gap-4">
        <div className="md:w-3/4 sm:border border-[#d4d6d8]">
          <div className="bg-white my-3">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="border-b border-black text-[#9a9da1] font-serif text-sm leading-normal">
                  <th className="py-2 px-6 text-left text-black">Product</th>
                  <th className="py-2 px-6 text-left text-black">Unit Price</th>
                  <th className="py-2 px-6 text-left text-black">Quantity</th>
                  <th className="py-2 px-6 text-left text-black">Total</th>
                </tr>
              </thead>
              <tbody className="text-[#4b5563] text-sm font-normal">
                {localOrder.orderItems.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-primary/15 cursor-pointer border-b border-[#d4d6d8]"
                  >
                    <td className="py-2 px-6 text-left flex">
                      <div>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-6 h-8 rounded-md mr-2"
                        />
                      </div>
                      <div className="flex justify-start items-center">
                        {item.name}
                      </div>
                    </td>
                    <td className="py-2 px-6 text-left">$ {item.price}</td>
                    <td className="py-2 px-6 text-left">{item.qty}</td>
                    <td className="py-2 px-6 text-left">
                      $ {addDecimals(item.price * item.qty)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex md:p-4 ">
            <div className=" flex flex-col ">
              <div className="">
                <table className="min-w-full bg-onPrimary overflow-hidden">
                  <thead className="bg-[#94a3b8]"></thead>
                  <tbody className="divide-y divide-onPrimary">
                    <tr>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        <b>Produits</b>
                      </td>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        $ {itemsPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        <b>Shipping</b>
                      </td>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        $ {localOrder.shippingPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        <b>Total</b>
                      </td>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        $ {localOrder.totalPrice}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        <b>Status</b>
                      </td>
                      <td className="py-2 px-4 md:text-base text-sm font-serif">
                        {localOrder.isPaid ? (
                          <div className="bg-[#9df7be] text-[#21944b] rounded-lg p-1">
                            Payment done
                          </div>
                        ) : (
                          <div className="bg-danger/30 text-danger rounded-lg p-1">
                            Not Paid
                          </div>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/4">
          <div className="flex justify-center border border-[#d4d6d8] p-2">
            {localOrder.isDeleivered ? (
              <button>
                <span className="font-serif font-medium rounded-sm text-xs sm:text-base flex flex-col justify-center text-onPrimary bg-onSurface py-2 px-6 ">
                  DELIVERED AT
                  <br />({moment(localOrder.isDeleiveredAt).format("Do MMM YY")}
                  )
                </span>
              </button>
            ) : (
              <>
                {deliveryLoading && <LoadingSpinner />}
                <button onClick={deliverHandler}>
                  <span className="font-serif font-medium rounded-sm text-sm sm:text-base text-onPrimary bg-onSurface py-2 px-12 ">
                    Mark as Delivered
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetailTable;
