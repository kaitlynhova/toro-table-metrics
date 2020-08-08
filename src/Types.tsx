// TABLE TYPES
export type Column = {
  name: string;
  type: string;
};

export type Table = {
  columns: Column[];
  id: number;
  schema: string;
  table: string;
};

export type Metric = {
  column: string;
  currentValue: any;
  id: number;
  metric: string;
};
