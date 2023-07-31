import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const getParamValue = (query: string = 'category') => {
    
    const searchParams = useSearchParams();

    return useMemo(() => {return searchParams.get(query)}, [query]);
}