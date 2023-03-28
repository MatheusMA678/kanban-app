import { Cards, Gear, Users, FileText } from "@phosphor-icons/react";
import { v4 } from "uuid";

export const navbarLinks = [
  { text: "Boards", href: "/", icon: <Cards size={28} weight={"bold"} /> },
  {
    text: "Equipes",
    href: "/equipes",
    icon: <Users size={28} weight={"bold"} />,
  },
  {
    text: "Relatórios",
    href: "/relatorios",
    icon: <FileText size={28} weight={"bold"} />,
  },
  {
    text: "Ajustes",
    href: "/ajustes",
    icon: <Gear size={28} weight={"bold"} />,
  },
];

const cards = [
  {
    id: v4(),
    title: "#boraCodar um Kanban 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: v4(),
    title: "Manter a ofensiva 🔥",
    desc: "Manter minha atividade na plataforma da Rocketseat para não perder a...",
    tags: ["rocketseat"],
  },
  {
    id: v4(),
    title: "Almoçar 🥗",
    desc: "Me alimentar, aproveitando um momento de descanso para recarregar...",
    tags: ["autocuidado"],
  },
  {
    id: v4(),
    title: "Conferir o novo desafio 🚀",
    desc: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: v4(),
    title: "Ser incrível 😎",
    desc: "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["autocuidado"],
  },
  {
    id: v4(),
    title: "#boraCodar uma página de login 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: v4(),
    title: "#boraCodar uma página de clima 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: v4(),
    title: "#boraCodar uma conversor 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
];

const columns = [
  {
    id: v4(),
    title: "A fazer",
    cards: [cards[0], cards[1], cards[2]],
  },
  {
    id: v4(),
    title: "Fazendo",
    cards: [cards[3], cards[4]],
  },
  {
    id: v4(),
    title: "Feito",
    cards: [cards[5], cards[6], cards[7]],
  },
];

const columnOrder = [columns[0], columns[1], columns[2]];

export { columnOrder, cards, columns };
