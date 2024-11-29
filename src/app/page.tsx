import Image from "next/image";
import Hero from "./components/Hero";
import Client from "./components/Client";
import Community from "./components/Community";
import Body from "./components/Body";
import Achievement from "./components/Achievement";
import Calendar from "./components/Calendar";
import Customer from "./components/Customers";
import Communityupdates from "./components/Communityupdates";
import Frame from "./components/Frame";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Client/>
    <Community/>
    <Body/>
    <Achievement/>
    <Calendar/>
    <Customer/>
    <Communityupdates/>
    <Frame/>
    <Footer/>

   </div>
  );
}
