import NumberFormat from 'react-number-format'; 
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const item = props.item;
  const priceAfterDiscount =
    item.originalPrice - (item.originalPrice * item.discontPercent) / 100;
 
  return (
    <div className="border-2 border-gray-200 px-3 rounded-lg pb-3">
    <Link to={item.name} >
      <img src={`img/product/${item.image}`} alt="" className="mt-3" />
        <h2 className="font-bold mb-3 mt-3">{item.name}</h2>
      </Link>
      <p className="text-gray-500 text-xs">{item.description}</p>
      <div className="flex justify-between mt-3">
        <div className="flex-col">
          <p className="font-bold">
            <NumberFormat thousandSeparator={"."} decimalSeparator={","} prefix={'Rp. '} value={priceAfterDiscount} displayType={'text'}/>
          </p>
          {item.discontPercent > 0 && (
            
            <p className="text-gray-500 text-xs line-through">{item.originalPrice}</p>

          )}
        </div>
        <button className="h-8 px-2 font-bold text-white bg-green-600 rounded-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default ProductCard;