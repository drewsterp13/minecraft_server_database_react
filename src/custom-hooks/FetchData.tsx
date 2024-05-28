import { useState, useEffect } from "react"
import { server_calls } from "../api/server"

export const useGetData = () => {
    const [ serverData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get_database();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { serverData, getData:handleDataFetch }
}