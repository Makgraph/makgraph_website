import React from "react";
import PieChartComponent from "./PieChartComponent";

const AppStatProducts = () => (
  <div className="sm:w-1/2 py-2">
    <div className="border-t border-x border-[#d4d6d8] flex items-center  justify-center bg-[#f3f4f6]">
      <div className="w-full bg-white p-2 shadow-lg">
        <h1 className="text-lg font-semibold font-serif mb-4">
          Products Statistics
        </h1>
        {/* <PieChartComponent /> */}
        <iframe
          className="w-full h-[300px] rounded-lg"
          src="https://charts.mongodb.com/charts-makgraph-website-xtqmyns/embed/charts?id=669d398b-4335-4595-8a4d-f79d457fe977&maxDataAge=3600&theme=light&autoRefresh=true"
          title="Embedded MongoDB Chart"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

// export default AppStatProducts;

// import React from "react";

// const AppStatProducts = () => (
//   <div className="sm:w-1/2 py-2">
//     <div className="border-t border-x border-[#d4d6d8] flex items-center justify-center bg-[#f3f4f6]">
//       <div className="w-full bg-white p-2 shadow-lg rounded-lg">
//         <h1 className="text-lg font-semibold font-serif mb-4">
//           Products Statistics
//         </h1>
//         <iframe
//           className="w-full h-full rounded-lg "
//           src="https://charts.mongodb.com/charts-makgraph-website-xtqmyns/embed/charts?id=669d316a-4335-4682-8ba8-f79d457ddacf&maxDataAge=3600&theme=light&autoRefresh=true"
//           title="Embedded MongoDB Chart"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   </div>
// );

export default AppStatProducts;
