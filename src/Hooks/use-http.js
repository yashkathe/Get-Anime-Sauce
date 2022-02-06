import { useState, useCallback } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const [error, setError] = useState(null);

    const [getUrl, setGetUrl] = useState("");

    const [receivedData, setReceivedData] = useState([]);

    const sendRequest = useCallback(async (requestConfig) => {
        setError(null);
        setIsLoading(true);
        setDataFetched(false);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            const data = await response.json();
            setReceivedData(data);
            setError(false);
            setIsLoading(false);
            setDataFetched(true);
        } catch (err) {
            setIsLoading(false);
            setDataFetched(false);
            setError(err.message);
        }

        setGetUrl("")
    }, []);

    return {
        isLoading,
        dataFetched,
        setDataFetched,
        error,
        setError,
        getUrl,
        setGetUrl,
        receivedData,
        sendRequest,
    };
};

export default useHttp;
