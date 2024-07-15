import React from "react";
import { IonIcon } from "@ionic/react";
import { eye } from "ionicons/icons";

const CategoriesTable = () => {
  const orders = [
    {
      input: (
        <div>
          <input type="checkbox" value="" className="" />
        </div>
      ),
      ID: "1",
      Name: "John Doe",
      Description: "Maillot homme",
      Action: (
        <div className="border border-[#d1d5db] rounded-md flex justify-center items-center w-6 sm:w-8">
          ...
        </div>
      ),
    },
    {
      input: (
        <div>
          <input type="checkbox" value="" className="" />
        </div>
      ),
      ID: "2",
      Name: "Jane Smith",
      Description: "Chaussure de femme",
      Action: (
        <div className="border border-[#d1d5db] rounded-md flex justify-center items-center w-6 sm:w-8">
          ...
        </div>
      ),
    },
    {
      input: (
        <div>
          <input type="checkbox" value="" className="" />
        </div>
      ),
      ID: "3",
      Name: "Val Smith",
      Description: "Chemise homme",
      Action: (
        <div className="border border-[#d1d5db] rounded-md flex justify-center items-center w-6 sm:w-8">
          ...
        </div>
      ),
    },
  ];

  return (
    <div className="my-2 sm:my-4 px-2 sm:px-4 overflow-x-auto">
      <div className="mx-auto mt-4  ">
        <div className="bg-white  rounded my-3">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-[#e5e7eb] text-[#4b5563] font-serif text-sm leading-normal border-b">
                <th className="py-2 px-6 text-left">
                  <div>
                    <input type="checkbox" value="" className="" />
                  </div>
                </th>
                <th className="py-2 px-6 text-left">ID</th>
                <th className="py-2 px-6 text-left">Name</th>
                <th className="py-2 px-6 text-left">Description</th>
                <th className="py-2 px-6 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-[#4b5563] text-sm font-light">
              {orders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b border-[#d1d5db]"
                  //   className={
                  //     index % 2 === 0
                  //       ? "bg-[#f3f4f6] font-serif"
                  //       : "bg-primary/20 font-serif"
                  //   }
                >
                  <td className="py-2 px-6 text-left font-serif">
                    {order.input}
                  </td>
                  <td className="py-2 px-6 text-left font-serif">{order.ID}</td>
                  <td className="py-2 px-6 text-left font-serif">
                    {order.Name}
                  </td>
                  <td className="py-2 px-6 text-left font-serif">
                    {order.Description}
                  </td>
                  <td className="py-2 px-6 text-left font-serif">
                    {order.Action}
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

export default CategoriesTable;
