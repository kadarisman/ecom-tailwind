
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { DownOutlined } from "@ant-design/icons";
import products from "../services/data/product";
import SideBAr from "./SideBar";
import Layout from "./Layout";


const Home = () => {
  return (
    <Layout>
      {/* main */}
      <div className="flex justify-between py-16">
        {/* sidebar */}
        <SideBAr />
        {/* product */}
        <div className="w-4/5">
          <div className="ml-8 justify-center">
            <div className="flex gap-8 flex-wrap">
              {products.map((item, index) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <button
              data-dropdown-toggle="dropdown"
              class="text-white bg-green-600 font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              Show more product
              <DownOutlined className="text-xs ml-1.5 text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </Layout>
  );
};

export default Home;
