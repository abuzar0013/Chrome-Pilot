import { NavbarDemo } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MacbookScrollDemo } from "@/components/Macbook"
import { HeroSectionOne } from "@/components/MobileHero";
import { InfiniteMovingCardsDemo } from "@/components/Reviews"
import { WobbleCardDemo } from "@/components/Wobble"
import { Faqs } from "@/components/Faq";


export default function Home() {
  return (
    <>
      <NavbarDemo/>
      <MacbookScrollDemo className = "hidden md:block"/>
      <div className="block md:hidden">
        <HeroSectionOne />
      </div> 
      <WobbleCardDemo/> 
      <InfiniteMovingCardsDemo/>
      <Faqs/>
      <Footer/>
    </>
  );
}

