import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import Slider from "./components/Slider";
import Hero from "./components/hero";
import Newest from "./components/newest";

export const revalidate = 5; // Revalidate every 5 seconds

export default function Home() {
  return (
   <div className="flex-col">
   <Navbar />
   <Slider />
   <Banner />
   <Hero />
   <Newest />
   {/* <FeaturedProducts /> */}

   {/* <div className="fixed right-0 top-12 z-50 opacity-90" >
   <Cart />   
   </div> */}
   </div>
  );
}
