import { Link } from "react-router-dom";
import Reveal from "../../animations/Reveal";
function Hero() {
  return (
    <section className="flex flex-col items-center mt-16 gap-4">
      <Reveal delay={0.1}>
        <figure className="max-w-[70px]">
          <img src="/logo.png" alt="logo of who owes whom" />
        </figure>
      </Reveal>
      <Reveal delay={0.3}>
        <h1 className="font-bold text-4xl text-center lg:text-6xl bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] bg-clip-text text-base-content p-2 drop-shadow-lg">
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
