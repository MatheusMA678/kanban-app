import React from "react";
import { TodoList } from "./KanbanLists/TodoList";
import { cardsDoing, cardsDone, cardsTodo } from "@/data";

export const KanbanLists = () => {
  return (
    <section className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-12">
      <TodoList title="A fazer" data={cardsTodo} />
      <TodoList title="Fazendo" data={cardsDoing} />
      <TodoList title="Feito" data={cardsDone} />
    </section>
  );
};
