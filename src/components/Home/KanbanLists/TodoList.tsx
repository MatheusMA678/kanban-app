import React from "react";
import { motion } from "framer-motion";
import { ColumnsType } from "@/@types/TodoProps";
import { Card } from "./Card";
import { DropTargetOptions, useDrop } from "react-dnd";

interface TodoListProps {
  data: Array<ColumnsType>;
}

export const TodoList = ({ data }: TodoListProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item: DropTargetOptions) => addCardToList(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addCardToList = (id: string) => {
    console.log(id);
  };

  return (
    <section className="grid lg:grid-cols-3 gap-12">
      {data.map((col) => {
        return (
          <div className="flex flex-col gap-8" key={col.id}>
            <h2 className="text-xl font-bold">{col.title}</h2>
            <div
              className="grid md:grid-cols-2 lg:flex lg:flex-col gap-4"
              ref={drop}
            >
              {col.cards.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

// { data }: TodoListProps
