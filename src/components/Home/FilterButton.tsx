import React from "react";
import { FunnelSimple } from "@phosphor-icons/react";

const FilterButton = () => {
  return (
    <button className="w-full h-12 lg:w-40 rounded-lg bg-primary text-white font-semibold transition active:scale-95 active:bg-primary/80 hover:bg-primary/90 flex items-center justify-center gap-2">
      <FunnelSimple size={28} weight="bold" />
      Filtrar
    </button>
  );
};

export default FilterButton;
