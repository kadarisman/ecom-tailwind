import { useParams } from "react-router-dom";
import Layout from "./Layout";
import products from "../services/data/product";
import NumberFormat from 'react-number-format'; 
import ProductCard from "./ProductCard";

const Detail = () => {
  const params = useParams();
  const item = products.filter(
    (element) => element.name === params.productName
  );
  const priceAfterDiscount =
  item[0].originalPrice - (item[0].originalPrice * item[0].discontPercent) / 100;
  return (
    <Layout>
      <div className="flex justify-center">
        {/* <ProductCard item={item[0]}/> */}
        <div className="border-2 border-gray-200 px-3 rounded-lg pb-3">
          <img src={`img/product/${item[0].image}`} alt="" className="mt-3" />
            <h2 className="font-bold mb-3 mt-3">{item[0].name}</h2>
          <div className="text-gray-500 text-xs w-60">Detail Description : <br/>{item[0].detailDescrption}</div>
          <div className="flex justify-between mt-3">
            <div className="flex-col">
              <p className="font-bold">
                <NumberFormat
                  thousandSeparator={"."}
                  decimalSeparator={","}
                  prefix={"Rp. "}
                  value={priceAfterDiscount}
                  displayType={"text"}
                />
              </p>
              {item[0].discontPercent > 0 && (
                <p className="text-gray-500 text-xs line-through">
                  {item[0].originalPrice}
                </p>
              )}
            </div>
            <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Detail;
