import React from "react";
import { motion } from "framer-motion";
import { CardsType } from "@/@types/TodoProps";
import { useDrag } from "react-dnd";

interface CardProps {
  card: CardsType;
}

export const Card = ({ card }: CardProps) => {
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <motion.div
      // ref={drag}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileDrag={{ rotate: 4, scale: 1.1 }}
      dragElastic={0.5}
      className={`flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4 min-h-[150px] transition-opacity ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <h3 className="font-semibold">{card.title}</h3>
      <p className="text-sm">{card.desc}</p>
      <div className="flex items-center gap-4">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="py-1 px-2 rounded-lg text-xs font-semibold text-primary bg-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
