
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";

import Navbar from '../app/components/LandingPageComponents/Navbar';
import NearbyRestaurants from '../app/components/LandingPageComponents/NearbyRestaurants';
import HeroSection from '../app/components/LandingPageComponents/HeroSection';
import WhyJoinSection from '../app/components/LandingPageComponents/WhyJoinSection';
import HowItWorksSection from '../app/components/LandingPageComponents/HowItWorksSection';
import PlatformFeaturesSection from '../app/components/LandingPageComponents/PlatformFeaturesSection';
import FaqSection from '../app/components/LandingPageComponents/FaqSection';
import CallToActionSection from '../app/components/LandingPageComponents/CallToActionSection';
import FooterSection from '../app/components/LandingPageComponents/FooterSection';
import AppSection from "./components/LandingPageComponents/AppSection";


export default function Page() {
  return (
    <html lang="en">

      <>
        <PrimeReactProvider value={{ unstyled: true }}>
          <>
            <Navbar />
            <NearbyRestaurants/>
            <HeroSection />
            <WhyJoinSection />
            <HowItWorksSection />
            <PlatformFeaturesSection />
            <AppSection />
            <CallToActionSection />
            <FaqSection />
            <FooterSection />
          </>
        </PrimeReactProvider>
      </>
    </html>
  );
}
