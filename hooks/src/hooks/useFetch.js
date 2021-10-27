import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(async () => {
        let search = await fetch(url, { method })
        let json = await search.json()
        setResponse({
            data: json,
            loading: false
        })
        
    }, [url, method])

    return response;
}