import React from "react";
import ProductCard from "./ProductCard";


const FilterContent = ({ filterProducts }) => {

  console.log("filterProducts", filterProducts)
  

  return (
    <div className="md:grid flex flex-col md:grid-cols-3 xl:grid-cols-4 gap-5">
      {filterProducts?.map((p, index)=><ProductCard name={p?.productName} key={index} image={p?.productImage} categoryName={p?.categoryName} subCategoryName={p?.subCategoryName}/>)}
    </div>
  )
};

export default FilterContent;
