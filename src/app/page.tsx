import { NavbarDemo } from "@/components/Navbar";
import Team from "@/components/Team";
import { TabsDemo } from "@/components/Tabs";
import { Footer } from "@/components/Footer";
import { MacbookScrollDemo } from "@/components/Macbook"


export default function Home() {
  return (
    <>
      <NavbarDemo/>
      <MacbookScrollDemo/>
      <Team/>
      <TabsDemo/>
      <br/>
      <Footer/>
    </>
  );
}

