export interface ICell {
  id: number;
  name: string;
  morphology: string;
  clinical_relevance: string;
  image: string;
  category: ICellCategory;
  created_at: string;
  updated_at: string;
}

export interface ICellCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ICellMention {
  id: number;
  name: string;
  url?: string;
  created_at: string;
  updated_at: string;
}
