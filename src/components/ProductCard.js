//import NumberFormat from 'react-number-format'; 
import FormatRupiah from "../helpers/formatRupiah";
const ProductCard = (props) => {
  const item = props.item;
  return (
    <div className="flex flex-row gap-1 flex-wrap justify-around">
      <div className="max-w-sm rounded overflow-hidden shadow-lg my-2">
        <img className="w-36 mx-auto" src={item.image} alt="Product" />
        <div className="px-6 py-4">
          <div className="font-bold text-sm mb-2 w-48">{item.title}</div>
          <h2 className="italic mb-3 mt-3">{item.category}</h2>
          <p className="text-gray-700 text-lg font-bold">
            {FormatRupiah(item.price * 100)}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read More..</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;