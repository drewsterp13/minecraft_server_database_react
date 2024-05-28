import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        ip: "ip",
        port: "port",
        hostname: "hostname",
        version: "version",
        motd: "motd",
        max_players: "max_players"
    },
    reducers: {
        chooseIP: (state, action) => { state.ip = action.payload },
        choosePort: (state, action) => { state.port = action.payload },
        chooseHostname: (state, action) => { state.hostname = action.payload },
        chooseVersion: (state, action) => { state.version = action.payload },
        chooseMOTD: (state, action) => { state.motd = action.payload },
        chooseMaxPlayers: (state, action) => { state.max_players = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const{ chooseIP, choosePort, chooseHostname, chooseVersion, chooseMOTD, chooseMaxPlayers } = rootSlice.actions