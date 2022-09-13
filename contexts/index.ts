import { createContext } from "react";

export type TAppContext = {
  browserWidth?: number;
};

export const AppContext = createContext<TAppContext>({});
