import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
    },
  },
};

const cardContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
    },
  },
};

export const KanbanLists = () => {
  return (
    <section className="grid grid-cols-3 gap-12">
      <motion.div className="flex flex-col gap-8">
        <h2 className="text-xl font-bold">A fazer</h2>
        <motion.div className="flex flex-col gap-4">
          {[...Array(5).keys()].map((i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: i * 0.5,
              }}
              whileHover={{
                scale: 1.05,
                cursor: "pointer",
                transition: {
                  duration: 0.2,
                  delay: 0,
                },
              }}
              className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between"
            >
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
