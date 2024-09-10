import React, { useState, useCallback } from "react";

const Categorie = ({ categorie }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  // Fonction pour fermer le pop-up lorsqu'on clique en dehors de celui-ci
  const handleOutsideClick = useCallback((e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup();
    }
  }, []);

  // Dimensions initiales pour les images
  const initialWidthImg = 720; // largeur en pixels de l'image initiale
  const initialHeightImg = 900; // hauteur en pixels de l'image initiale
  const popupWidthImgS = (initialWidthImg * 40) / 100; // largeur du pop-up 60% de la largeur initiale
  const popupHeightImgS = (initialHeightImg * 40) / 100; // hauteur du pop-up 60% de la hauteur initiale
  const popupWidthImg = (initialWidthImg * 60) / 100; // largeur du pop-up 40% de la largeur initiale pour mobile
  const popupHeightImg = (initialHeightImg * 60) / 100; // hauteur du pop-up 40% de la hauteur initiale pour mobile

  // Dimensions initiales pour les vidéos
  const initialWidth = 360; // largeur en pixels de la vidéo initiale
  const initialHeight = 640; // hauteur en pixels de la vidéo initiale
  const popupWidth = (initialWidth * 80) / 100; // largeur du pop-up 80% de la largeur initiale
  const popupHeight = (initialHeight * 80) / 100; // hauteur du pop-up 80% de la hauteur initiale
  const popupWidthS = (initialWidth * 70) / 100; // largeur du pop-up 60% de la largeur initiale pour mobile
  const popupHeightS = (initialHeight * 70) / 100; // hauteur du pop-up 60% de la hauteur initiale pour mobile

  return (
    <div className="border border-[#d4d6d8] max-w-[224px] max-h-[277.73px]  sm:min-h-[249.83px] flex items-center justify-center relative">
      <div className="py-1 sm:py-2 px-1 sm:px-2" key={categorie._id}>
        <div
          onClick={(e) => {
            e.preventDefault();
            openPopup();
          }}
        >
          {categorie.category === "video" ? (
            <div className="relative size-full cursor-pointer hover:scale-120 transition-transform duration-500 ease-in-out  rounded-sm">
              <video
                controls
                className="size-full max-w-[186px] max-h-[232px] object-cover rounded-lg"
                // poster={categorie.url} // Assurez-vous que l'URL du poster est correcte
              >
                <source src={categorie.url} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-sm">
                <span className="text-white text-3xl">▶</span>
              </div>
            </div>
          ) : (
            <img
              src={categorie.url}
              className="size-full hover:scale-120 transition-transform duration-500 ease-in-out max-w-[206.67px] max-h-[232.5px] rounded-sm"
              alt={categorie.title}
            />
          )}
        </div>
      </div>

      {/* Pop-Up */}
      {isOpen && (
        <div
          className="fixed inset-0 popup-overlay bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="relative bg-black p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 text-white font-bold text-xl bg-gray-800 p-1 rounded-full z-50"
              onClick={closePopup}
            >
              ×
            </button>
            {categorie.category === "video" ? (
              <div>
                <video
                  controls
                  className="w-full h-full object-cover rounded-lg hidden sm:flex"
                  style={{
                    width: `${popupWidth}px`,
                    height: `${popupHeight}px`,
                  }}
                  // poster={categorie.url} // Assurez-vous que l'URL du poster est correcte
                >
                  <source src={categorie.url} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                <video
                  controls
                  className="w-full h-full object-cover rounded-lg flex sm:hidden"
                  style={{
                    width: `${popupWidthS}px`,
                    height: `${popupHeightS}px`,
                  }}
                  // poster={categorie.url} // Assurez-vous que l'URL du poster est correcte
                >
                  <source src={categorie.url} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            ) : (
              <div className="">
                <img
                  src={categorie.url}
                  className="w-full h-full object-cover rounded-lg hidden sm:flex"
                  style={{
                    width: `${popupWidthImg}px`,
                    height: `${popupHeightImg}px`,
                    // maxWidth: "90%",
                    // maxHeight: "90%",
                  }}
                  alt={categorie.title}
                />
                <img
                  src={categorie.url}
                  className="w-full h-full object-cover rounded-lg flex sm:hidden"
                  style={{
                    width: `${popupWidthImgS}px`,
                    height: `${popupHeightImgS}px`,
                    // maxWidth: "90%",
                    // maxHeight: "90%",
                  }}
                  alt={categorie.title}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categorie;

// import React, { useState, useCallback } from "react";
// import { Link } from "react-router-dom";

// const Categorie = (props) => {
//   const { categorie } = props;
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   // Fonction pour fermer le pop-up lorsqu'on clique en dehors de celui-ci
//   const handleOutsideClick = useCallback((e) => {
//     if (e.target.classList.contains("popup-overlay")) {
//       closePopup();
//     }
//   }, []);

//   // Dimensions initiales de la vidéo
//   const initialWidth = 360; // largeur en pixels de la vidéo initiale
//   const initialHeight = 640; // hauteur en pixels de la vidéo initiale
//   const aspectRatio = initialHeight / initialWidth; // ratio hauteur / largeur

//   // Dimensions du pop-up basées sur le ratio initial
//   const popupWidth = initialWidth * 2; // largeur du pop-up 2x la largeur initiale
//   const popupHeight = popupWidth * aspectRatio; // ajuster la hauteur en fonction du ratio

//   return (
//     <div className="border border-[#d4d6d8] max-w-[224px] max-h-[277.73px] min-h-[249.83px] flex items-center justify-center relative">
//       <div className="py-1 sm:py-2 px-1 sm:px-2" key={categorie._id}>
//         <Link
//           to="#"
//           onClick={(e) => {
//             e.preventDefault();
//             if (categorie.category === "video") openPopup();
//           }}
//         >
//           {categorie.category === "video" ? (
//             <div className="relative cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out max-w-[40px] max-h-[60px] rounded-sm">
//               <img
//                 src={categorie.url}
//                 className="w-full h-full object-cover rounded-sm"
//                 alt={categorie.title}
//                 // Ajoutez une image de prévisualisation si nécessaire
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-sm">
//                 <span className="text-white text-3xl">▶</span>
//               </div>
//             </div>
//           ) : (
//             <img
//               src={categorie.url}
//               className="w-full hover:scale-120 transition-transform duration-500 ease-in-out max-w-[206.67px] max-h-[232.5px] rounded-sm"
//               alt={categorie.title}
//             />
//           )}
//         </Link>
//       </div>

//       {/* Pop-Up */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 popup-overlay bg-black bg-opacity-60 flex items-center justify-center z-50"
//           onClick={handleOutsideClick}
//         >
//           <div
//             className="relative bg-black p-4 rounded-lg"
//             style={{
//               width: `${popupWidth}px`,
//               height: `${popupHeight}px`,
//               maxWidth: "90%",
//               maxHeight: "90%",
//             }}
//           >
//             <button
//               className="absolute top-2 right-2 text-white font-bold text-xl bg-gray-800 p-1 rounded-full z-50"
//               onClick={closePopup}
//             >
//               ×
//             </button>
//             <video
//               controls
//               className="w-full h-full object-cover rounded-lg"
//               poster={categorie.url} // Assurez-vous que l'URL du poster est correcte
//             >
//               <source src={categorie.url} type="video/mp4" />
//               Votre navigateur ne supporte pas la lecture de vidéos.
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categorie;

// import React, { useState, useCallback } from "react";
// import { Link } from "react-router-dom";

// const Categorie = (props) => {
//   const { categorie } = props;
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   // Fonction pour fermer le pop-up lorsqu'on clique en dehors de celui-ci
//   const handleOutsideClick = useCallback((e) => {
//     if (e.target.classList.contains("popup-overlay")) {
//       closePopup();
//     }
//   }, []);

//   // Dimensions initiales de la vidéo
//   const initialWidth = 360; // largeur en pixels de la vidéo initiale
//   const initialHeight = 640; // hauteur en pixels de la vidéo initiale
//   const aspectRatio = initialHeight / initialWidth; // ratio hauteur / largeur

//   // Dimensions du pop-up basées sur le ratio initial
//   const popupWidth = initialWidth * 2; // largeur du pop-up 2x la largeur initiale
//   const popupHeight = popupWidth * aspectRatio; // ajuster la hauteur en fonction du ratio

//   return (
//     <div className="border border-[#d4d6d8] max-w-[224px] max-h-[277.73px] min-h-[249.83px] flex items-center justify-center relative">
//       <div className="py-1 sm:py-2 px-1 sm:px-2" key={categorie._id}>
//         <Link
//           to="#"
//           onClick={(e) => {
//             e.preventDefault();
//             if (categorie.category === "video") openPopup();
//           }}
//         >
//           {categorie.category === "video" ? (
//             <div className="relative cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out max-w-[40px] max-h-[60px] rounded-sm">
//               <img
//                 src={categorie.url}
//                 className="w-full h-full object-cover rounded-sm"
//                 alt={categorie.title}
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-sm">
//                 <span className="text-white text-3xl">▶</span>
//               </div>
//             </div>
//           ) : (
//             <img
//               src={categorie.url}
//               className="w-full hover:scale-120 transition-transform duration-500 ease-in-out max-w-[206.67px] max-h-[232.5px] rounded-sm"
//               alt={categorie.title}
//             />
//           )}
//         </Link>
//       </div>

//       {/* Pop-Up */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 popup-overlay bg-black bg-opacity-60 flex items-center justify-center z-50"
//           onClick={handleOutsideClick}
//         >
//           <div
//             className="relative bg-black p-4 rounded-lg"
//             style={{
//               width: `${popupWidth}px`,
//               height: `${popupHeight}px`,
//               maxWidth: "30%",
//               maxHeight: "90%",
//             }}
//           >
//             <button
//               className="absolute top-2 right-2 text-white font-bold text-xl bg-gray-800 p-1 rounded-full"
//               onClick={closePopup}
//             >
//               ×
//             </button>
//             <video controls className="w-full h-full object-cover rounded-lg">
//               <source src={categorie.url} type="video/mp4" />
//               Votre navigateur ne supporte pas la lecture de vidéos.
//             </video>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Categorie;

// import React from "react";
// import { Link } from "react-router-dom";

// const Categorie = (props) => {
//   const { categorie } = props;

//   return (
//     <div className="border border-[#d4d6d8] max-w-[224px] max-h-[277.73px] min-h-[249.83px] flex items-center justify-center">
//       <div className="py-1 sm:py-2 px-1 sm:px-2" key={categorie._id}>
//         <Link to="#">
//           {categorie.category === "video" ? (
//             <video
//               controls
//               className="size-full hover:scale-110 transition-transform duration-500 ease-in-out max-w-[206.67px] max-h-[232.5px] rounded-sm"
//             >
//               <source src={categorie.url} type="video/mp4" />
//               Votre navigateur ne supporte pas la lecture de vidéos.
//             </video>
//           ) : (
//             <img
//               src={categorie.url}
//               className="size-full hover:scale-120 transition-transform duration-500 ease-in-out max-w-[206.67px] max-h-[232.5px] rounded-sm"
//               alt={categorie.title}
//             />
//           )}
//         </Link>
//       </div>
//       {/* <div className="pl-3">
//       <div className="text-start w-[100%]">
//         <p className="font-semibold font-serif text-sm md:text-base">
//           {categorie.title}
//         </p>
//         <p className="font-thin text-xs md:text-sm">
//           <b>{categorie.description}</b>
//         </p>
//       </div>
//     </div> */}
//     </div>
//   );
// };

// export default Categorie;
