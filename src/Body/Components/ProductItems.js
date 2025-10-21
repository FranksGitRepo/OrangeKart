import { useState } from "react";
import { fruitsData, vegData } from "./constant";
import ProductCard from "./ProductCard";
import "./Productitems.css";
import { useURLSearchParams } from "../../urlsearchParams";
function ProductItems(props) {
  const [fruits, setFruits] = useState(fruitsData);
  const [veg, setVeg] = useState(vegData);
  const onsavecarthandler = (clkvalue, name, amt, img) => {
    props.mpcartvalue(clkvalue, name, amt, img);
  };
  const { search } = useURLSearchParams();

  if (props.name == "Veg") {
    return (
      <div className="productslist">
        {veg
          .filter((vegItem) =>
            vegItem?.name?.toLowerCase()?.includes(search?.toLowerCase() ?? "")
          )
          .map((product) => (
            <ProductCard
              name={product.name}
              amount={product.amount}
              srcpath={product.srcpath}
              onsavecartvalue={onsavecarthandler}
              setVeg={setVeg}
              product={product}
            />
          ))}
      </div>
    );
  } else {
    return (
      <div className="productslist">
        {fruits
          .filter((fruitItem) =>
            fruitItem?.name
              ?.toLowerCase()
              ?.includes(search?.toLowerCase() ?? "")
          )
          .map((product) => (
            <ProductCard
              name={product.name}
              amount={product.amount}
              srcpath={product.srcpath}
              onsavecartvalue={onsavecarthandler}
              setFruits={setFruits}
              product={product}
            />
          ))}
      </div>
    );
  }
}
export default ProductItems;
