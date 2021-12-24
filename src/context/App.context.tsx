import { createContext, ReactNode, useState } from "react";

interface IAppContextData {
    curRoute: string;
    changeRoute: (route: string) => void;
}

interface IAppContextProps {
    children: ReactNode;
}

export const AppContext = createContext({} as IAppContextData);

export function AppProvider({ children }: IAppContextProps) {
    const [curRoute, setCurRoute] = useState("home");

    function changeRoute(route: string) {
        setCurRoute(route);
    }

    return (
        <AppContext.Provider
            value={{
                curRoute,
                changeRoute,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
