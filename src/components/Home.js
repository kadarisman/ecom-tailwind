import { useState, useEffect } from "react";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import Layout from "./Layout";
import axios from "axios";

const Home = (props) => {
  const [products, setProduct] = useState([]);
  const [productsFilter, setProductFilter] = useState([]);
  const [cart, setCart] = useState(0);
  const [search, setSearch] = useState([]);
  
  useEffect(() => {
    getProducts();
    
  },[]);

  const getProducts = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products/');
    setProduct(response.data);
    setProductFilter(response.data);
  }

  const handleCategories =  async (e) => {
    const categorySelected = e;
    const response = await axios.get('https://fakestoreapi.com/products/');
    const productByCategory = response.data.filter((item, index ) => item.category === categorySelected);
    setProduct(productByCategory);
    //setProductFilter(productByCategory);
  }

  const handleOrderBy = (e) => {
    const orderByValue = e;
    if(orderByValue == 'murah'){
      //console.log(e);
      const sortByMurah = [...products];
      sortByMurah.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProduct(sortByMurah);
      //console.log(sortByMurah);
    } else {
      //console.log(e);
      const sortByMahal = [...products];
      sortByMahal.sort((a, b) => (a.price > b.price ? -1 : 1));
      setProduct(sortByMahal);
      //console.log(sortByMahal);
    }
  }

  const addToCart = () =>{
    setCart( cart + 1);
  }

  const handleSearch = async (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const old = products;
    const response = await axios.get('https://fakestoreapi.com/products/');

    if (searchQuery !== '') {
      const filteredData = response.data.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(searchQuery.toLowerCase())
      })
      setProduct(filteredData)
    }
    else{
      setProduct(old)
    }  
  }

  return (
    <Layout cart={cart} handleSearch={handleSearch}>
      <div className="flex flex-row py-16 pl-6">
          <div className="w-72">
          <SideBar onClick={handleCategories} getAll={getProducts} orderBy={handleOrderBy}/>
          </div>
          <div className="flex flex-row gap-1 flex-wrap justify-around ml-5 w-full">
              {products.map((product, index) => {
                return <ProductCard item={product}  key={product.id } addToCart={addToCart}/>;
              })}
          </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
