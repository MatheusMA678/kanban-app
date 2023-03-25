import React from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { gray } from "tailwindcss/colors";

interface InputProps {
  value: any;
  onChange: (
    e?:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="flex-1 flex items-center gap-4 px-4 shadow-lg rounded-lg bg-white">
      <MagnifyingGlass size={28} weight="bold" color={gray[400]} />
      <input
        type="text"
        placeholder="Busque por cards, assuntos ou responsáveis..."
        className="outline-none placeholder:text-gray-400 w-full h-full p-4"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
