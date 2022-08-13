import { useState, useEffect } from "react";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import SideBar from "./SideBar";
import Layout from "./Layout";
import axios from "axios";

const Home = () => {
  const [products, setProduct] = useState([]);
  const [productsFilter, setProductFilter] = useState([]);
  
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
    setProductFilter(productByCategory);
  }

  const handleOrderBy = (e) => {
    const orderByValue = e;
    // const produtcOrderbyPrice = productsFilter.sort((a, b) => (a.price > b.price ? 1 : -1));'oo'cc'dd.s.iqdd
    let produtcOrderbyPrice = [];
    if(orderByValue == 'murah'){
      console.log(e);
      produtcOrderbyPrice = productsFilter.sort((a, b) => (a.price > b.price ? 1 : -1));
      console.log(produtcOrderbyPrice);
      //setProduct(produtcOrderbyPrice);
    } else {
      console.log(e);
      produtcOrderbyPrice = productsFilter.sort((a, b) => (a.price > b.price ? -1 : 1));
      console.log(produtcOrderbyPrice);
      //setProduct(produtcOrderbyPrice);
    }
    setProduct(produtcOrderbyPrice);
    // console.log(produtcOrderbyPrice);
  }

  return (
    <Layout>
      <div className="flex flex-row py-16 pl-6">
          <div className="w-72">
          <SideBar onClick={handleCategories} getAll={getProducts} orderBy={handleOrderBy}/>
          </div>
          <div className="flex flex-row gap-1 flex-wrap justify-around ml-5 w-full">
              {products.map((product, index) => {
                return <ProductCard item={product}  key={product.id } />;
              })}
          </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
