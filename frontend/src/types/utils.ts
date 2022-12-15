export type UnionizeKeys<T extends object> = {
  [P in keyof T]: P;
}[keyof T];

export type UnionizeValues<T extends object> = {
  [P in keyof T]: T[P];
}[keyof T];
