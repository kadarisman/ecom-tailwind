import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import FormatRupiah from '.././helpers/formatRupiah';
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Detail = () => {
  const [categoriByid, setCategoriById] = useState([]);
  const { id } = useParams();

  const getProductById = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setCategoriById(response.data);
  }

  useEffect(() => {
    getProductById();
  }, [])

  return (
    <>
      <div href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl mx-auto mt-16 p-3">
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={categoriByid.image} alt="image" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold">{categoriByid.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{categoriByid.description}</p>
          <div className="px-6 pt-4 pb-2 flex flex-row gap-3">
            <h5 className="mb-2 text-base font-bold">{FormatRupiah(categoriByid.price ? categoriByid.price : 0 * 100)}</h5>
            <Link to={`/`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-32">Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
