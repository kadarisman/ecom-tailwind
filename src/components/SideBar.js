import { useState, useEffect } from "react";
import axios from "axios";
import Order from "./sidebarComponents/Order";
function SideBAr(props) {
  const [categories, setcategories] = useState([]);
  const [total, setTotal] = useState('');
  const [categoriActive, setCategoriActive] = useState('');
  const [allActive, setAllActive] = useState('bg-green-600 text-white text-xs px-1.5 py-0.5 rounded mb-1');

  const onCategory = (e, item) => {
    props.onClick(e.target.id);
    setAllActive('bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1');
    setCategoriActive(item.item);
  }

  const getAllProduct = (e) => {
    props.getAll(e.target.id);
    setCategoriActive('');
    setAllActive('bg-green-600 text-white text-xs px-1.5 py-0.5 rounded mb-1');
  }

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    const getAllProducts = await axios.get('https://fakestoreapi.com/products/');
    let getCat = [];
    response.data.map((item) => {
      const count = getAllProducts.data.filter((product, productIndex) => product.category === item).length;
      getCat = [...getCat, { item: item, jumlah: count }]
      return true;
    })
    setTotal(getAllProducts.data.length);
    setcategories(getCat);
  }

  const styleNotActive = 'bg-gray-200 text-gray-700 text-xs px-1.5 py-0.5 rounded mb-1';
  const styleActive = 'bg-green-600 text-white text-xs px-1.5 py-0.5 rounded mb-1';

  return (
    <div className="px-4">
      <h2 className="text-base font-bold">Categories</h2>
      <ul className="text-sm py-3">
        <div className="flex justify-between">
          <button>
            <li className={allActive} onClick={(e) => getAllProduct(e)}>All
            </li>
          </button>
          <span className="text-green-500 bg-gray-100 font-semibold p-1 rounded-lg ml-10">
            {total}
          </span>
        </div>
        {categories.map((item, index) => {
          return (
            <div className="flex justify-between" key={index}>
              <button>
                <li className={categoriActive === item.item ? styleActive : styleNotActive} onClick={(e) => onCategory(e, item)} id={item.item} key={item.item}>
                  {item.item}
                </li>
              </button>
              <span className="text-green-500 bg-gray-100 font-semibold p-1 rounded-lg ml-10">
                {item.jumlah}
              </span>
            </div>
          )
        })}
      </ul>
      <Order product={props.orderBy} />
    </div>
  );
}
export default SideBAr;