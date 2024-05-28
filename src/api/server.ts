const token = "6e81d5bf41c979b52e77b1ab"
const link_database = "https://minecraft-server-flask.onrender.com/api/servers"
const link_api = "https://api.mcsrvstat.us/3/"

export const server_calls = {
    // This gets the api
    get_api: async (ip: String) => {
        const response = await fetch(`${link_api}${ip}`,
            {
                method: "GET"
            }
        );

        if (!response.ok) {
            throw new Error("failed to fetch server info, sorry")
        }
        
        return await response.json()
    },

    // This gets my database
    get_database: async () => {
        const response = await fetch(link_database,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            throw new Error("failed to fetch server info, sorry")
        }

        return await response.json()
    },

    // the rest is applied to ONLY my database

    add: async (data: any = {}) => {
        const response = await fetch(link_database,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        )

        if (!response.ok) {
            throw new Error("failed to add new server info, sorry")
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`${link_database}/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
        )

        if (!response.ok) {
            throw new Error("failed to update server info, sorry")
        }

        return await response.json()

    },

    delete: async (id: string) => {
        const response = await fetch(`${link_database}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "x-access-token": `Bearer ${token}`
                }
            }
        )

        if (!response.ok) {
            throw new Error("failed to delete server info, sorry")
        }

        return;
    }
}