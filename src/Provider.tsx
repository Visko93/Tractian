import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "@/services/client"

interface ProviderProps {
    children: ReactNode;
}

function Provider({ children }: ProviderProps) {

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export { Provider };