export interface GhostInt {
  name: string;
  age: number;
  country: string;
  wife: boolean;

  ghostInfo(): void;
  getPrivateProperties(): any;
}
