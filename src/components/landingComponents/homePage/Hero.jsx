import { Link } from "react-router-dom";
import Reveal from "../../animations/Reveal";
function Hero() {
  return (
    <section className="flex flex-col items-center mt-16 gap-4 ">
      <div className="absolute -z-10 w-full h-[50vh]relative">
        <div className="bg-hero-bg-blob-1 h-[300px] w-[300px] blur-3xl animate-blob-1 absolute left-[20px] top-[20px]"></div>
        <div className="bg-hero-bg-blob-2 h-[300px] w-[300px] blur-3xl animate-blob-1 absolute right-[20px] top-[10px]"></div>
      </div>

      <Reveal delay={0.1}>
        <figure className="max-w-[70px]">
          <img src="/logo.png" alt="logo of who owes whom" />
        </figure>
      </Reveal>
      <Reveal delay={0.3}>
        <h1 className="font-bold text-4xl text-center lg:text-6xl bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] bg-clip-text text-transparent p-2">
          The easiest way to manage group finances
        </h1>
      </Reveal>
      <Reveal delay={0.5}>
        <p className="font-[600] text-center tracking-[1px] lg:text-xl">
          Collaborative finances. Seamless Transactions. Precise Balances.
        </p>
      </Reveal>
      <Reveal delay={0.7}>
        <Link
          to="/app"
          className="btn mt-[2rem] md:w-max md:btn-lg w-full bg-gradient-to-r  from-[#8E2DE2] to-[#4A00E0] font-[500]"
        >
          Get Started
        </Link>
      </Reveal>
    </section>
  );
}

export default Hero;
