import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const URL_API = "https://fake-api.tractian.com";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },

    },
})

const axiosClient = axios.create({
    baseURL: URL_API,
});


export  {queryClient, axiosClient,URL_API};