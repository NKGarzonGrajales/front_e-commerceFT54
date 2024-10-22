import CardList from "@/components/CardList/CardList";
import { getProductsDB } from "@/helpers/products.helper";
import Carousel from "@/components/Carousel/carousel";




const HomeView = async () => {
  const products = await getProductsDB();

  return (
    <div>
      <Carousel />
      <div className="bg-white p-8 rounded-lg shadow-md mx-auto mt-10 w-screen">
        <CardList products={products} />  
      </div>
    </div>
  );
};
 
export default HomeView;
