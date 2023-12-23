import { createContext, useContext, useState } from "react";

const ReloadContext = createContext();

export function useReload() {
    return useContext(ReloadContext);
}

export function ReloadProvider({ children }) {
    const [reload, setReload] = useState(0);

    return (
        <ReloadContext.Provider
            value={{
                reloadCounter: reload,
                setReload
            }}
        >
            {children}
        </ReloadContext.Provider>
    )
}