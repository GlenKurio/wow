import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <section className="my-8  md:my-32 flex flex-col justify-center items-center gap-8 relative min-h-[100vh]">
      <h3 className="text-4xl font-bold text-center leading-[1.3]">
        Simplify group finances effortlessly with WOW.
      </h3>
      <Link
        to="/app"
        className="btn mt-[2rem] md:w-max md:btn-lg w-full bg-gradient-to-r  from-[#8E2DE2] to-[#4A00E0] font-[500]"
      >
        Get Started
      </Link>
      <img
        className="max-w-[500px] blur-[200px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transfor -z-10"
        src="/ellipse-bg.svg"
        aria-hidden
      />
    </section>
  );
}

export default GetStarted;
