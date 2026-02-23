import {createContext, useContext, useEffect, useState} from "react";
import demoStores from "../../public/demoStores.json";

// 1. Create the context
const StoreContext = createContext(null);

// Helper: read ?tab= from the current URL (falls back to "store")
const getTabFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("tab") || "store";
};

// Helper: push a new URL with the updated tab without reloading
const pushTabToUrl = (tab) => {
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.history.pushState({ tab }, "", url.toString());
};

// 2. Custom hook for easy consumption
export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};

// 3. Provider component
export const StoreProvider = ({ children }) => {
    const [activeTab, setActiveTabState] = useState(getTabFromUrl);
    const [storeList, setStoreList] = useState(demoStores);

    const setActiveTab = (tab) => {
        setActiveTabState(tab);
        pushTabToUrl(tab);
    };

    const value = {
        activeTab,
        setActiveTab,
        storeList,
        setStoreList
    };

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContext;
