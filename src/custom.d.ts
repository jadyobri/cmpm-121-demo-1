//make png recognizable by main.ts
declare module "*.png" {
  const value: string;
  export default value;
}
