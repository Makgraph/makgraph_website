import React from "react";
import { IonIcon } from "@ionic/react";
import { eye } from "ionicons/icons";
import { Link } from "react-router-dom";
import moment from "moment";
// import { moment } from "moment";

const OrdersTable2 = (props) => {
  const { orders } = props;
  const orderTab = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      total: "$50.00",
      paid: "$50.00",
      date: (
        <div className="bg-[#fee2e2] text-danger p-1 rounded-lg font-semibold">
          Not Paid
        </div>
      ),
      status: (
        <div className="bg-[#16a34a] text-onPrimary p-1 rounded-lg font-semibold">
          Delivered
        </div>
      ),
      eyeIcon: "eye",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      total: "$75.00",
      paid: "$75.00",
      date: (
        <div className="bg-[#dcfce7] text-[#16a34a] p-1 rounded-lg font-semibold">
          Paid at today 12:00 AM
        </div>
      ),
      status: (
        <div className="bg-black text-onPrimary p-1 rounded-lg font-semibold">
          Not Delivered
        </div>
      ),
      eyeIcon: "eye",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <div className="mx-auto mt-4 overflow-x-auto ">
        <div className="bg-white  my-3">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="border-b border-black text-[#9a9da1] font-serif text-sm leading-normal">
                <th className="py-2 px-6 text-left">Name</th>
                <th className="py-2 px-6 text-left">Email</th>
                <th className="py-2 px-6 text-left">Total</th>
                <th className="py-2 px-6 text-left">Paid</th>
                <th className="py-2 px-6 text-left">Date</th>
                <th className="py-2 px-6 text-left">Status</th>
                <th className="py-2 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#4b5563] text-sm font-normal">
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="hover:bg-primary/15 cursor-pointer"
                  //   className={
                  //     index % 2 === 0
                  //       ? "bg-[#f3f4f6] font-serif"
                  //       : "bg-primary/20 font-serif"
                  //   }
                >
                  <td className="py-2 px-6 text-left font-bold whitespace-nowrap">
                    {order.user.name}
                  </td>
                  <td className="py-2 px-6 text-left">{order.user.email}</td>
                  <td className="py-2 px-6 text-left">{order.totalPrice}</td>
                  <td className="py-2 px-6 text-left">
                    {order.isPaid ? (
                      <div className="bg-[#dcfce7] text-[#16a34a] p-1 rounded-lg font-semibold">
                        {/* Paid at {moment(order.paidAt).format("MMM Do YY")} */}
                        Paid at {moment(order.paidAt).format("MMM Do YY")}
                      </div>
                    ) : (
                      <div className="bg-[#fee2e2] text-danger p-1 rounded-lg font-semibold">
                        Not Paid
                      </div>
                    )}
                  </td>
                  <td className="py-2 px-6 text-left">
                    {" "}
                    {moment(order.ceateAt).format("MMM Do YY")}
                  </td>
                  <td className="py-2 px-6 text-left">
                    {order.isDelivered ? (
                      <div className="bg-[#16a34a] text-onPrimary p-1 rounded-lg font-semibold">
                        Delivered
                      </div>
                    ) : (
                      <div className="bg-black text-onPrimary p-1 rounded-lg font-semibold">
                        Not Delivered
                      </div>
                    )}
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
      </div>
    </div>
  );
};

export default OrdersTable2;
