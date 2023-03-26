import { Cards, Gear, Users, FileText } from "@phosphor-icons/react";

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

export const cardsTodo = [
  {
    id: 1,
    title: "#boraCodar um Kanban 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 2,
    title: "Manter a ofensiva 🔥",
    desc: "Manter minha atividade na plataforma da Rocketseat para não perder a...",
    tags: ["rocketseat"],
  },
  {
    id: 3,
    title: "Almoçar 🥗",
    desc: "Me alimentar, aproveitando um momento de descanso para recarregar...",
    tags: ["autocuidado"],
  },
];

export const cardsDoing = [
  {
    id: 1,
    title: "Conferir o novo desafio 🚀",
    desc: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 2,
    title: "Ser incrível 😎",
    desc: "Sempre me lembrar de manter minha autenticidade e espalhar amor",
    tags: ["autocuidado"],
  },
];

export const cardsDone = [
  {
    id: 1,
    title: "#boraCodar uma página de login 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 2,
    title: "#boraCodar uma página de clima 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
  {
    id: 3,
    title: "#boraCodar uma conversor 🧑‍💻",
    desc: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir...",
    tags: ["rocketseat", "desafio"],
  },
];
