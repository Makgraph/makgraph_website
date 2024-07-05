import React from "react";
import LoadingSpinner from "../loadingError/loading";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const data = [
  { id: 1, status: "Pending", date: "2024-07-04", total: 100 },
  { id: 2, status: "Completed", date: "2024-07-03", total: 150 },
  // Ajoutez d'autres données selon vos besoins
];

const orderTabs = () => {
  const orderDetails = useSelector((state) => state.orderDetails.orderDetails);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);

  console.log(orderDetails);
  return (
    <div className="overflow-x-auto">
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {orderDetails.length === 0 ? (
            <div>
              No Orders
              <Link>START SHOPPING</Link>
            </div>
          ) : (
            <table className="min-w-full bg-white border-collapse border border-[#e5e7eb]">
              <thead>
                <tr className="bg-onSecondary/50">
                  <th className="border border-secondary/40 px-4 py-2">ID</th>
                  <th className="border border-primary/40 px-4 py-2">STATUS</th>
                  <th className="border border-primary/40 px-4 py-2">DATE</th>
                  <th className="border border-primary/40 px-4 py-2">TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((order) => (
                  <tr
                    key={order._id}
                    className={`${
                      order.isPaid ? "bg-secondary/20" : "bg-primary/25"
                    }`}
                  >
                    <td className="border border-primary/40 px-4 py-2">
                      {item.id}
                    </td>
                    <td className="border border-primary/40 px-4 py-2">
                      {item.status}
                    </td>
                    <td className="border border-primary/40 px-4 py-2">
                      {item.date}
                    </td>
                    <td className="border border-primary/40 px-4 py-2">
                      {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default orderTabs;
