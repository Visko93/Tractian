import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "@/services/client"
import { ViewerContextProvider } from './context/viewerContext';

interface ProviderProps {
    children: ReactNode;
}

function Provider({ children }: ProviderProps) {

    return (
        <QueryClientProvider client={queryClient}>
            <ViewerContextProvider>
                {children}
            </ViewerContextProvider>
        </QueryClientProvider>
    );
};

export { Provider };