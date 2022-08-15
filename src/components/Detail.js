import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import FormatRupiah from '.././helpers/formatRupiah';
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Detail = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const { id } = useParams();

  const getProductById = async (e) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
    setDescription(response.data.description);
    setCategory(response.data.category);
    setImage(response.data.image);
  }

  useEffect(() => {
    getProductById();
  }, [])

  return (
    <>
      <div href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl mx-auto mt-16 p-3">
        <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="image" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold">{title}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <div className="px-6 pt-4 pb-2 flex flex-row gap-3">
            <h5 class="mb-2 text-base font-bold">{FormatRupiah(price * 100)}</h5>
            <Link to={`/`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-32">Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
