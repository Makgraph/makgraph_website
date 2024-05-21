import React from "react";

export default function Works(props) {
  const { productImage } = props.data;

  return (
    <div className="">
      <div className="rounded w-auto h-auto flex flex-col transition hover:ease-in  hover:scale-150 s cursor-pointer ">
        <img src={productImage} className="w-auto rounded " />
      </div>
    </div>
  );
}
