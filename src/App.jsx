// export default function App() {
//   return (
//     <div>
//       <div className="m-4">
//         <h1>Makgraph header!</h1>
//         <h2>Makgraph header!</h2>
//         <h3>Makgraph header!</h3>
//         <h4>Makgraph header!</h4>
//         <h5>Makgraph header!</h5>
//         <h6>Makgraph header!</h6>
//       </div>

//       <div className="m-4">
//         <p>Makgraph paragraph!</p>
//         <pm>Makgraph paragraph!</pm>
//         <div>
//           <ps>Makgraph paragraph!</ps>
//         </div>
//       </div>
//       <div className="m-4">
//         <a href="https://makgraphwebsite.com">This is an anchor</a>
//       </div>
//       <div className="m-4">
//         <div className="m-2">
//           <button className="btn-primary">
//             <span className="labellg ">Primary btn</span>
//           </button>
//         </div>
//         <div className="m-2">
//           <button className="btn-border ">
//             <span className="labellg text-primary">Border btn</span>
//           </button>
//         </div>
//         <div className="m-2">
//           <button className="btn-text">
//             <span className="labellg text-primary">Text btn</span>
//           </button>
//         </div>
//         <div className="m-2">
//           <div className="btn-arrow">
// <button className="btn-icon">
//   <span className="labellg ">Voir plus de modele</span>

//   <span className="shrink-0 rounded-full border border-current bg-white p-2 text-primary group-active:text-primary">
//     <svg
//       className="size-5 rtl:rotate-180"
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M17 8l4 4m0 0l-4 4m4-4H3"
//       />
//     </svg>
//   </span>
// </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
// import BackgroundImage from "./assets/Background_web_1.png";
import {
  Header,
  Home,
  Gallery,
  Shop,
  About,
  Contact,
  Footer,
} from "./components";

const App = () => (
  // <div className="container ">
  <div className="pt-20 md:pt-24 h-full">
    <Header />
    <Home />
    <About />
    <Contact />
    <Gallery />
    <Shop />

    {/* 
    <div>
      
      
      
      <Footer />
    </div> */}
  </div>
);

export default App;
