import Footer from "./Footer";
import ProductCard from "./ProductCard";
import { DownOutlined } from "@ant-design/icons";
import products from "../services/data/product";
import SideBar from "./SideBar";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      {/* main */}
      <div className="flex justify-end mx-11 py-16">
        {/* sidebar */}
        <SideBar />
        {/* product */}
          <div className="pl-11">
            <div className="flex gap-8 flex-wrap">
              {products.map((item, index) => {
                return <ProductCard item={item} />;
              })}
            </div>
          </div>
      </div>

      <div className="flex justify-center mb-10">
        <button
          data-dropdown-toggle="dropdown"
          class="text-white bg-green-600 font-bold rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Show more product
          <DownOutlined className="text-xs ml-1.5 text-white" />
        </button>
      </div>

      {/* footer */}
      <Footer />
    </Layout>
  );
};

export default Home;
