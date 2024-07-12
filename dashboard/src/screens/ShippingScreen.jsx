import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateShippingAddress } from "../redux/Cart/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/headerComponent/Header";

const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shippingAddress = useSelector((state) => state.cart.shippingAddress); // Fetch shipping address from Redux store
  const [formData, setFormData] = useState({
    address: shippingAddress.address || "",
    city: shippingAddress.city || "",
    postalCode: shippingAddress.postalCode || "",
    country: shippingAddress.country || "",
  });

  useEffect(() => {
    // Save form data to localStorage whenever it changes
    localStorage.setItem("shippingFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateShippingAddress(formData));
    navigate("/payment");
  };

  return (
    <div className="">
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-16 ">
        <div className="bg-onTertiary/40 p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-lg md:text-xl flex justify-center font-semibold font-serif mb-4">
            Shipping Information
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm md:text-base  font-serif text-[#334155]"
              >
                ADRESSE
              </label>
              <input
                type="text"
                id="address"
                placeholder="Entrez votre adresse"
                value={formData.address}
                onChange={handleChange}
                className="p-1 md:p-2 mt-1 block w-full text-medium font-serif border-[#d1d5db] rounded-md shadow-sm focus:ring-[#6366f1] focus:border-[#6366f1] sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-sm md:text-base font-serif text-[#334155]"
              >
                VILLE
              </label>
              <input
                type="text"
                id="city"
                placeholder="Entrez votre ville"
                value={formData.city}
                onChange={handleChange}
                className="p-1 md:p-2 mt-1 block w-full text-medium font-serif border-[#d1d5db] rounded-md shadow-sm focus:ring-[#6366f1] focus:border-[#6366f1] sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="postalCode"
                className="block text-sm md:text-base font-serif text-[#334155]"
              >
                CODE POSTAL
              </label>
              <input
                type="text"
                id="postalCode"
                placeholder="Entrez votre code postal"
                value={formData.postalCode}
                onChange={handleChange}
                className="p-1 md:p-2 mt-1 block w-full text-medium font-serif border-[#d1d5db] rounded-md shadow-sm focus:ring-[#6366f1] focus:border-[#6366f1] sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm md:text-base font-serif text-[#334155]"
              >
                PAYS
              </label>
              <input
                type="text"
                id="country"
                placeholder="Entrez votre pays"
                value={formData.country}
                onChange={handleChange}
                className="p-1 md:p-2 mt-1 block w-full text-medium font-serif border-[#d1d5db] rounded-md shadow-sm focus:ring-[#6366f1] focus:border-[#6366f1] sm:text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-medium font-sans font-semibold text-white py-2 px-4 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:bg-[#22c55e] focus:ring-offset-2"
            >
              Procéder au paiement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingScreen;
