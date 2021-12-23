import { createContext, ReactNode } from "react";

interface IAppContextData {}

interface IAppContextProps {
    children: ReactNode;
}

export const AppContext = createContext({} as IAppContextData);

export function AppProvider({ children }: IAppContextProps) {
    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
