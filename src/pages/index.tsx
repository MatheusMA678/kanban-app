import FilterButton from "@/components/Home/FilterButton";
import { Input } from "@/components/Home/Input";
import React, { useState } from "react";
import { PencilSimple } from "@phosphor-icons/react";
import { gray } from "tailwindcss/colors";

const Home = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
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
        <div className="w-16 h-16 rounded-full bg-gray-500" />
      </section>
      <form
        onSubmit={handleSubmit}
        className="w-full lg:flex-row lg:items-stretch flex flex-col-reverse gap-8"
      >
        <FilterButton />
        <Input value={value} onChange={(e) => setValue(e!.target.value)} />
      </form>
      <section className="grid grid-cols-3 gap-12">
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold">A fazer</h2>
          <div className="flex flex-col gap-4">
            <div className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between">
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </div>
            <div className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between">
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </div>
            <div className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between">
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold">Fazendo</h2>
          <div className="flex flex-col gap-4">
            <div className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between">
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </div>
            <div className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between">
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold">Feito</h2>
          <div className="flex flex-col gap-4">
            <div className="w-full h-40 rounded-lg bg-white shadow-lg p-6 flex flex-col justify-between">
              <h3 className="font-bold text-sm">Título</h3>
              <p className="text-sm text-gray-600 justify-self-start overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <span className="bg-primary/20 font-bold text-xs w-fit rounded-lg px-2 py-1 text-primary">
                Rocketseat
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
