import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";
function HomePage() {
  return (
    <div>
      <Hero></Hero>
      <Suspense fallback={<LoadingContainer></LoadingContainer>}>
        <FeaturedProducts></FeaturedProducts>
      </Suspense>
    </div>
  );
}
export default HomePage;
