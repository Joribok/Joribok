export type Unionize<T extends object> = {
  [P in keyof T]: T[P];
}[keyof T];
