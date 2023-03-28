import FilterButton from "@/components/Home/FilterButton";
import { Input } from "@/components/Home/Input";
import React, { useState } from "react";
import { PencilSimple } from "@phosphor-icons/react";
import { gray } from "tailwindcss/colors";
import { TodoList } from "@/components/Home/KanbanLists/TodoList";
import { columns } from "@/data";

const Home = () => {
  const [value, setValue] = useState("");
  const [formValue, setFormValue] = useState("");

  const columnsFiltered = columns.map((col) => {
    return col.cards.filter((item) => {
      return item.title.toLowerCase().includes(formValue.toLowerCase());
    });
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="flex flex-col gap-16">
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-4xl">Meu Kanban</h1>
          <button>
            <PencilSimple size={28} weight="bold" color={gray[400]} />
          </button>
        </div>
        <div className="w-16 h-16 rounded-full bg-gray-500 hidden sm:block"></div>
      </section>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:h-14 lg:flex-row lg:items-stretch flex flex-col-reverse gap-8"
      >
        <FilterButton />
        <Input value={value} onChange={handleChange} />
      </form>
      <TodoList data={columns} />
    </section>
  );
};

export default Home;

//  data={formValue === "" ? columns : cardsFiltered}
