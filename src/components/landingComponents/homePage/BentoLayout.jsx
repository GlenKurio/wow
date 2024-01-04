import { motion } from "framer-motion";

function BentoLayout() {
  return (
    <section className="md:grid md:grid-cols-12 md:grid-rows-12 flex flex-col gap-4 mt-32">
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className=" bg-gradient-to-r from-[#8d2de23b] to-[#4b00e042] backdrop-blur-[50px] md:col-span-8 md:row-span-8 h-[520px]  rounded-lg p-6 shadow-lg flex flex-col justify-between gap-4 "
      >
        <div className="flex justify-between items-center">
          <h3 className="text-4xl font-bold text-center text-base-content mx-auto">
            Transaction History
          </h3>

          <button className="btn btn-circle btn-accent shadow-xl btn-sm">
            &rarr;
          </button>
        </div>
        <p className="text-lg md:text-xl text-center font-semibold tracking-[1px] text-base-content">
          Easily tack history of all group transactions with numerous filters
          and sorting options
        </p>
        <div className="bg-bento-1  bg-cover bg-no-repeat h-[250px] bg-left md:bg-center rounded-md "></div>
      </motion.article>
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className=" bg-gradient-to-r from-[#8d2de23b] to-[#4b00e042] backdrop-blur-[50px] md:col-span-4 md:row-span-4 rounded-lg p-4 shadow-lg flex justify-between items-center gap-4"
      >
        <div className="flex flex-col items-center gap-8 mx-auto">
          <p className="text-lg md:text-xl text-center font-semibold tracking-[1px] text-base-content ">
            Set Budgets
          </p>
          <button className="btn btn-circle btn-accent shadow-xl btn-sm">
            &rarr;
          </button>
        </div>
        <div className="flex items-center h-full rounded-md w-[60%]">
          <img
            src="/bento-grid/g-2.png"
            alt="screenshot of budget statistics screen"
          />
        </div>
      </motion.article>
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="bg-gradient-to-r from-[#8d2de23b] to-[#4b00e042] backdrop-blur-[50px] md:col-span-4 md:row-span-4 rounded-lg p-6 shadow-lg flex justify-between items-center gap-4"
      >
        <div className="flex items-center h-full rounded-md w-[60%]">
          <img
            src="/bento-grid/g-3.png"
            alt="screenshot of budget statistics screen"
          />
        </div>
        <div className="flex flex-col items-center gap-8 mx-auto">
          <p className="text-lg md:text-xl text-center font-semibold tracking-[1px] text-base-content">
            Track Activity
          </p>
          <button className="btn btn-circle btn-accent shadow-xl btn-sm">
            &rarr;
          </button>
        </div>
      </motion.article>
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-gradient-to-r from-[#8d2de2] to-[#4b00e0] backdrop-blur-[50px] md:row-span-4 md:col-span-5 rounded-lg p-6 shadow-lg flex flex-col gap-8 justify-center"
      >
        <h3 className="text-2xl font-bold text-center">
          New Features Monthly!
        </h3>
        <p className="text-lg text-center font-[300] tracking-[1px]">
          Tell us what you think. Help us make the app better for everyone and
          maybe your feature will be the next we implement!
        </p>
      </motion.article>
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className=" bg-gradient-to-r from-[#8d2de23b] to-[#4b00e042] backdrop-blur-[50px] md:row-span-4 md:col-span-7 rounded-lg p-6 shadow-lg flex flex-col gap-4"
      >
        <div className="flex items-center gap-8 justify-between">
          <p className="text-lg md:text-xl text-center font-semibold tracking-[1px] text-base-content">
            Balances and Stats
          </p>
          <button className="btn btn-circle btn-accent shadow-xl btn-sm">
            &rarr;
          </button>
        </div>
        <div className="bg-bento-4  bg-cover bg-no-repeat h-[150px] bg-left md:bg-bottom rounded-md "></div>
      </motion.article>
    </section>
  );
}

export default BentoLayout;
