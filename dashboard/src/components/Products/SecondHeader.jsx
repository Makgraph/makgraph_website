import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, chevronDownOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

const SecondHeader = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLastOpen, setDropdownLastOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdownLast = () => {
    setDropdownLastOpen(!dropdownLastOpen);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="bg-white border border-[#d4d6d8] py-2 sm:py-2 px-4 sm:px-2 sm:gap-4 md:gap-20 sm:flex sm:justify-between sm:items-center relative">
      {/* Search Bar */}
      <form onSubmit={submitHandler} className="flex items-center">
        <div className="relative flex-1">
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IonIcon icon={searchOutline} className="text-[#4b5563]" />
          </div>
          {/* Input Field */}
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-[#e5e7eb] w-full text-sm sm:text-base text-[#1f2937] rounded-sm py-2 pl-10 md:pr-4 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            aria-label="Rechercher"
          />
        </div>
        {/* Styled Search Button */}
        <button
          type="submit"
          className="ml-0 px-4 py-2 bg-primary text-white font-semibold rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
        >
          Search
        </button>
      </form>

      <div className="flex gap-3 sm:gap-4">
        {/* Categories Dropdown */}
        <div className="flex gap-6 sm:gap-10 border border-[#d4d6d8] my-2 px-2 items-center">
          <p className="font-serif text-sm sm:text-base">All Categories</p>
          <button
            className="text-[#374151] flex items-center hover:bg-[#d1d5db] focus:outline-none"
            onClick={toggleDropdown}
          >
            <IonIcon
              icon={chevronDownOutline}
              className=" h-3 sm:h-4 w-3 sm:w-4"
            />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full w-36 sm:w-48 bg-white rounded-md shadow-lg py-4 sm:py-1 z-10">
              <button className="block w-full font-serif text-left text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
                T-shirt
              </button>
              <button className="block w-full font-serif text-left text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
                Shoes
              </button>
              <button className="block w-full font-serif text-left text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
                Others
              </button>
            </div>
          )}
        </div>
        {/* Last Added */}
        <div className="flex gap-10 border border-[#d4d6d8] my-2 p-2 items-center">
          <p className="font-serif text-sm sm:text-base">Last Added</p>
          <button
            className="text-[#374151] flex items-center hover:bg-[#d1d5db] focus:outline-none"
            onClick={toggleDropdownLast}
          >
            <IonIcon
              icon={chevronDownOutline}
              className=" h-3 sm:h-4 w-3 sm:w-4"
            />
          </button>
          {dropdownLastOpen && (
            <div className="absolute top-full right-0 w-36 sm:w-48 bg-white rounded-md shadow-lg py-4 sm:py-1 z-10">
              <button className="block w-full text-left font-serif text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
                Sheap first
              </button>
              <button className="block w-full text-left font-serif text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
                Most viewed
              </button>
              <button className="block w-full text-left font-serif text-sm sm:text-base px-4 py-2 text-[#374151] hover:bg-[#e5e7eb]">
                Others
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
