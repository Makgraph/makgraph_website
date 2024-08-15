import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { searchOutline, chevronDownOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

const SecondHeader = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <div className="hidden sm:flex justify-center py-4 w-full ">
      {/* Search Bar */}
      <form onSubmit={submitHandler} className="flex w-full mx-10 items-center">
        <div className="relative flex-1">
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IonIcon icon={searchOutline} className="text-[#4b5563]" />
          </div>
          {/* Input Field */}
          <input
            type="text"
            placeholder="Rechercher..."
            className="bg-[#e5e7eb] w-full text-sm sm:text-base text-[#1f2937] rounded-sm py-1 pl-10 md:pr-4 outline-none border border-[#d1d5db] focus:border-[#9ca3af] focus:bg-white focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            aria-label="Rechercher"
          />
        </div>
        {/* Styled Search Button */}
        <button
          type="submit"
          className="ml-0 px-4 py-1 bg-primary text-white font-semibold rounded-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-[#d1d5db] focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SecondHeader;
