import ReviewCard from "./ReviewCard";
import { motion } from "framer-motion";
const reviews = [
  {
    fullName: "Alice Johnson",
    avatar: "/avatars-fillers/avatar-2.png",
    social: "@alicejohnson",
    body: "WOW made managing our group finances a breeze! It streamlined our process and helped us keep track of who owes what easily.",
  },
  {
    fullName: "David Smith",
    avatar: "/avatars-fillers/avatar-1.png",
    social: "@davidsmith",
    body: "I've tried multiple finance management tools, but WOW stands out for its simplicity and effectiveness. Highly recommended!",
  },
  {
    fullName: "Emily Wilson",
    avatar: "/avatars-fillers/avatar-4.png",
    social: "@emilywilson",
    body: "As a frequent traveler, WOW has been a lifesaver for managing shared expenses with my friends. It's user-friendly and efficient.",
  },
  {
    fullName: "Michael Brown",
    avatar: "/avatars-fillers/avatar-3.png",
    social: "@michaelbrown",
    body: "WOW's intuitive interface makes keeping track of debts among friends effortless. It's a game-changer for group finances!",
  },
  {
    fullName: "Sophia Martinez",
    avatar: "/avatars-fillers/avatar-6.png",
    social: "@sophiamartinez",
    body: "I've finally found the perfect tool for managing shared expenses. WOW simplifies everything and reduces the headache of splitting bills.",
  },
  {
    fullName: "Ethan Thompson",
    avatar: "/avatars-fillers/avatar-5.png",
    social: "@ethanthompson",
    body: "Managing finances within our club was chaotic until we found WOW. Now, it's organized, transparent, and hassle-free. Great app!",
  },
  {
    fullName: "Olivia Garcia",
    avatar: "/avatars-fillers/avatar-8.png",
    social: "@oliviagarcia",
    body: "WOW has revolutionized how my roommates and I handle our household expenses. It's easy to use and keeps everyone accountable.",
  },
  {
    fullName: "William Lee",
    avatar: "/avatars-fillers/avatar-7.png",
    social: "@williamlee",
    body: "I'm impressed by how WOW simplifies managing finances in groups. It's a must-have tool for anyone sharing expenses!",
  },
];

function Reviews() {
  return (
    <section className="min-h-[70vh] mt-32 ">
      <h3 className="text-4xl font-bold text-base-content tracking-[1px] text-center mb-16">
        See What Our Users Say
      </h3>
      <div className="flex flex-wrap gap-8 justify-center">
        {reviews.map((review, idx) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1 * idx,
              type: "spring",
              mass: 15,
              stiffness: 500,
              damping: 90,
            }}
          >
            <ReviewCard review={review} key={idx} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
