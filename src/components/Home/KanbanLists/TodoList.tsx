import React from "react";
import { motion } from "framer-motion";
import { TodoProps } from "@/@types/TodoProps";

interface TodoListProps {
  title: string;
  data: Array<TodoProps>;
}

export const TodoList: React.FC<TodoListProps> = ({ data, title }) => {
  return (
    <motion.div className="flex flex-col gap-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <motion.div className="flex flex-col gap-4">
        {data.map((card, i) => (
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
            className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between"
          >
            <h3 className="font-bold text-sm">{card.title}</h3>
            <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
              {card.desc}
            </p>
            <div className="flex gap-2 items-center">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
