import React from "react";
import { IonIcon } from "@ionic/react";
import { eye } from "ionicons/icons";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Loadingerror/loading";
import Message from "../Loadingerror/errorMessage";
import { useSelector } from "react-redux";
import moment from "moment";

const OrdersTable = () => {
  const { orders, loading, error } = useSelector((state) => state.orders);
  console.log(orders);
  // const orders1 = [
  //   {
  //     user: "John Doe",
  //     email: "john.doe@example.com",
  //     price: "$50.00",
  //     status: "Pending",
  //     date: "2024-07-13",
  //     eyeIcon: "eye",
  //   },
  //   {
  //     user: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     price: "$75.00",
  //     status: "Completed",
  //     date: "2024-07-12",
  //     eyeIcon: "eye",
  //   },
  // ];

  return (
    <div className="overflow-x-auto">
      <div className="mx-auto mt-4 border border-[#d4d6d8] ">
        <h2 className="text-lg font-serif font-semibold pl-2 pt-2 ">
          New Orders
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Message>
            <div className=" m-4 p-4">
              <Message variant="bg-[#fee2e2] text-[#991b1b]">{error}</Message>
            </div>
          </Message>
        ) : (
          <div className="bg-white shadow-md rounded my-3">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-[#e5e7eb] text-[#4b5563] font-serif text-sm leading-normal">
                  <th className="py-2 px-6 text-left">User</th>
                  <th className="py-2 px-6 text-left">Email</th>
                  <th className="py-2 px-6 text-left">Price</th>
                  <th className="py-2 px-6 text-left">Status</th>
                  <th className="py-2 px-6 text-left">Date</th>
                  <th className="py-2 px-6 text-left">Icon</th>
                </tr>
              </thead>
              <tbody className="text-[#4b5563] text-sm font-light">
                {orders.slice(0, 13).map((order, index) => (
                  <tr
                    key={order._id}
                    className={
                      index % 2 === 0
                        ? "bg-[#f3f4f6] font-serif"
                        : "bg-primary/20 font-serif"
                    }
                  >
                    <td className="py-2 px-6 text-left whitespace-nowrap">
                      {order.user.name}
                    </td>
                    <td className="py-2 px-6 text-left">{order.user.email}</td>
                    <td className="py-2 px-6 text-left">
                      $ {order.totalPrice}
                    </td>

                    <td className="py-2 px-6 text-left">
                      {order.isPaid ? (
                        <div className="bg-[#dcfce7] text-[#16a34a] p-1 rounded-lg font-semibold">
                          Paid at {moment(order.paidAt).format("MMM Do YY")}
                        </div>
                      ) : (
                        <div className="bg-[#fee2e2] text-danger p-1 rounded-lg font-semibold">
                          Not Paid
                        </div>
                      )}
                    </td>
                    <td className="py-2 px-6 text-left">
                      {moment(order.ceatedAt).calendar()}
                    </td>
                    <td className="py-2 px-6 text-left">
                      <Link to={`/orderDetail/${order._id}`}>
                        <IonIcon
                          icon={eye}
                          className="h-5 w-5 mr-2 text-primary"
                        />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersTable;
