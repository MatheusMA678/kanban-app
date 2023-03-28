export interface CardsType {
  id: string;
  title: string;
  desc: string;
  tags: Array<string>;
}

export interface ColumnsType {
  id: string;
  title: string;
  cards: Array<CardsType>;
}
