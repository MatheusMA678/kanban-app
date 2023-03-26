import React from "react";
import { FunnelSimple } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const FilterButton = () => {
  return (
    <motion.button
      whileTap={{
        scale: 0.95,
      }}
      className="w-full h-12 lg:h-full lg:w-40 rounded-lg bg-primary text-white font-semibold transition active:bg-primary/80 hover:bg-primary/90 flex items-center justify-center gap-2"
    >
      <FunnelSimple size={28} weight="bold" />
      Filtrar
    </motion.button>
  );
};

export default FilterButton;
