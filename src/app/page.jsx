import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WelcomeSection from "./landing_page_components/welcome/welcome";
import FindPlaceSection from "./landing_page_components/find_place/FindPlaceSection";
import EmbarkSection from "./landing_page_components/embark/EmbarkSection";
import "./globals.css";

export default function App(){
    return(
        <div>
            <SiteHeader/>
            <WelcomeSection />
            <FindPlaceSection />
            <EmbarkSection />
            <SiteFooter />
        </div>
    );
}