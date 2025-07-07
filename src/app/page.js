import Image from "next/image";
import Slider from "./pages/components/home-page-components/Slider";
import ProductCateCard from "./pages/components/home-page-components/ProductCateCard";
import ProductTabs from "./pages/components/home-page-components/ProductTabs";
import NewTrendingCollection from "./pages/components/home-page-components/NewTrendingCollection";
import BestSellingProducts from "./pages/components/home-page-components/BestSellingProducts";
import SiteKeyPoints from "./pages/components/home-page-components/SiteKeyPoints";
import HomeTestimonial from "./pages/components/home-page-components/HomeTestimonial";
import NewsLetter from "./pages/components/home-page-components/NewsLetter";


export const metadata = {
  title: "Monsta Home Page",
  description: "Monsta Home Page Designed by Next.js",
};


export default function Home() {
  return (
    <section>

      <Slider />
      <ProductCateCard />

      <div className='w-full h-[0.5px] bg-[#cccccc80]'></div>

      <ProductTabs />

      <NewTrendingCollection />

      <BestSellingProducts />

      <SiteKeyPoints />

      <HomeTestimonial />

      <NewsLetter />

    </section>
  );
}