import { motion } from "framer-motion";

const medias = [
  "/media/forbes.png",
  "/media/fortune.png",
  "/media/nyt.png",
  "/media/usa-today.png",
  "/media/vogue.png",
  "/media/wsj.png",
];

function FeaturedIn() {
  return (
    <article className="flex flex-wrap items-center justify-center gap-4 mx-auto mt-16">
      {medias.map((media, idx) => (
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.5 * idx,
            type: "spring",
            mass: 15,
            stiffness: 500,
            damping: 90,
          }}
          src={media}
          alt="logo of mass media company"
          className=" grayscale invert aspect-video object-contain max-w-[150px] inline-block mx-auto"
        />
      ))}
    </article>
  );
}

export default FeaturedIn;
