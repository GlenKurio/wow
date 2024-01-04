import Hero from "../../../components/landingComponents/homePage/Hero";

import FeaturedIn from "../../../components/landingComponents/homePage/FeaturedIn";
import BentoLayout from "../../../components/landingComponents/homePage/BentoLayout";
import Details from "../../../components/landingComponents/homePage/Details";
import Reviews from "../../../components/landingComponents/homePage/Reviews";
import GetStarted from "../../../components/landingComponents/homePage/GetStarted";
function HomePage() {
  return (
    <main className=" min-h-screen p-4 relative overflow-hidden max-w-[1600px] mx-auto">
      <img
        src="/hero-blobs/blob2.svg"
        alt=""
        className="blur-[100px]  w-[800px] absolute top-[100px] right-[-100px] -z-10 "
      />
      <img
        src="/hero-blobs/blob3.svg"
        alt=""
        className="blur-[100px]  max-w-[1200px] absolute top-[100px] left-[-80px] -z-10 x"
      />
      <img
        src="/hero-blobs/blob4.svg"
        alt=""
        className="blur-[100px] max-w-[800px] absolute top-[-150px] right-[-90px] -z-10 "
      />
      <img
        src="/hero-blobs/blob1.svg"
        alt=""
        className="blur-[100px]  w-[800px] absolute top-[-190px] left-[-80px] -z-10 "
      />

      <Hero />
      <FeaturedIn />
      <BentoLayout />
      <Details />
      <Reviews />
      <GetStarted />
    </main>
  );
}

export default HomePage;
