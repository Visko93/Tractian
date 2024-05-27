import { Asset } from "@/utils/treeView/types";
import { createContext, useContext, useState } from "react";


interface ViewerContextProps {
    selectedAsset: Asset | null;
    select: (asset: Asset) => void;
}

const ViewerContext = createContext<ViewerContextProps | null>(null);

function ViewerContextProvider({ children }: { children: React.ReactNode }) {
    const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

    const select = (asset: Asset) => {
        if (asset.id === selectedAsset?.id) return;
        setSelectedAsset(asset);
    };

    return (
        <ViewerContext.Provider value={{ selectedAsset, select }}>
            {children}
        </ViewerContext.Provider>
    );
}

function useViewerContext() {
    const context = useContext(ViewerContext);
    if (!context) {
        throw new Error('useViewerContext must be used within a ViewerContextProvider');
    }
    return context;
}

export { ViewerContextProvider, useViewerContext };

