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

const cards = [
  {
    id: 1,
    title: "Título",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tags: ["rocketseat"],
  },
  {
    id: 2,
    title: "Título",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tags: ["rocketseat"],
  },
  {
    id: 3,
    title: "Título",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tags: ["rocketseat"],
  },
  {
    id: 4,
    title: "Título",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    tags: ["rocketseat"],
  },
];

export const KanbanLists = () => {
  return (
    <section className="grid grid-cols-3 gap-12">
      <motion.div className="flex flex-col gap-8">
        <h2 className="text-xl font-bold">A fazer</h2>
        <motion.div className="flex flex-col gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
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
                cursor: "pointer",
              }}
              className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between"
            >
              <h3 className="font-bold text-sm">{card.title}</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                {card.desc}
              </p>
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
