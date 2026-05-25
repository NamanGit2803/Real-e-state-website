

import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import PopularPlace from "@/components/home/PopularPlace";
import WhyUs from "@/components/home/WhyUs";
import { FeatureProperty } from "@/components/home/FeatureProperty";

export default function HomePage() {
 

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <Hero/>
      
      {/* CATEGORY SECTION */}
     <Categories/>

     {/* feture properties  */}
     <FeatureProperty/>

      {/* POPULAR LOCATIONS */}
      <PopularPlace/>

      {/* WHY US  */}
      <WhyUs/>
    </div>
  );
}