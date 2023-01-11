export interface ISpell {
  name: string;
  index: string;
  url?: string;
}

export interface SpillsList {
  count: number | null;
  results: ISpell[] | null;
}
