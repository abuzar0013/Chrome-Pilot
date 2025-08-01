import { NavbarDemo } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MacbookScrollDemo } from "@/components/Macbook"
import { MobileHero } from "@/components/MobileHero";
import { InfiniteMovingCardsDemo } from "@/components/Reviews"
import { WobbleCardDemo } from "@/components/Wobble"


export default function Home() {
  return (
    <>
      <NavbarDemo/>
      <MacbookScrollDemo className = "hidden md:block"/>
      <div className="block md:hidden">
        <MobileHero />
      </div> 
      <WobbleCardDemo/> 
      <InfiniteMovingCardsDemo/>
       
      <Footer/>
    </>
  );
}

