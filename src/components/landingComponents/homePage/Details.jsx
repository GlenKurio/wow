import { motion } from "framer-motion";

function Details() {
  return (
    <section className=" mt-32  bg-gradient-to-r from-[#ff00cc] to-[#333399] flex flex-col gap-4 md:flex-row overflow-hidden md:justify-between rounded-lg">
      <div className="md:max-w-[40%] flex flex-col p-4 gap-8">
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-lg font-semibold text-base-content tracking-[1px]"
        >
          Who Owes Whom App
        </motion.h3>
        <motion.h4
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl font-bold leading-[1.3]"
        >
          The finance app that makes life easier
        </motion.h4>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg font-[300] tracking-[1px]"
        >
          At WOW, we've redefined the way you manage group finances, making life
          simpler and more efficient. Our app revolutionizes the management of
          shared expenses and debts, offering a range of advantages.
        </motion.p>
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="btn btn-accent"
        >
          Learn More &rarr;
        </motion.button>
        <div className="flex flex-col items-center mt-8 gap-4 ">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="avatar"
            >
              <div className="w-12">
                <img src="/avatars-fillers/avatar-1.png" />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="avatar"
            >
              <div className="w-12">
                <img src="/avatars-fillers/avatar-2.png" />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="avatar"
            >
              <div className="w-12">
                <img src="/avatars-fillers/avatar-3.png" />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="avatar"
            >
              <div className="w-12">
                <img src="/avatars-fillers/avatar-4.png" />
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="avatar placeholder"
            >
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+10k</span>
              </div>
            </motion.div>
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg font-[600] text-center"
          >
            More than 10,000 monthly active users!
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-details bg-cover bg-no-repeat bg-left md:bg-bottom-right md:w-[1100px] h-[700px] "
      ></motion.div>
    </section>
  );
}

export default Details;
