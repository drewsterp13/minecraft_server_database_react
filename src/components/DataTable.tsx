import React, { useState } from 'react'
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal"
import { server_calls } from "../api/server"
import AddDataForm from "../components/AddDataForm"
import { useGetData } from "../custom-hooks/FetchData"

interface mySelectionModel {
    selmodel: string[];
}

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "ip", headerName: "IP", width: 130 },
    { field: "port", headerName: "Port", width: 130 },
    { field: "hostname", headerName: "Hostname", width: 130 },
    { field: "version", headerName: "Version", width: 130 },
    { field: "motd", headerName: "MOTD", minWidth: 130, maxWidth: 2000},
    { field: "max_players", headerName: "Max Players", width: 130 },
];

function FormButton( prop: mySelectionModel ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className="bg-green-500 text-white m-3 p-1 rounded hover:bg-green-700 font-semibold" onClick={handleOpen}>add server</button>
            <button className="bg-green-500 text-white m-3 p-1 rounded hover:bg-green-700 font-semibold" onClick={handleOpen}>edit server</button>    
            <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                <div className="text-center bg-green-700 text-white w-80">
                    <h1 className="text-xl bg-green-950">Enter IP Address</h1>
                    <AddDataForm id={prop.selmodel}/>
                    <div className="flex flex-row justify-center">
                        <button className="bg-red-600 text-white m-3 p-1 rounded hover:bg-red-700 w-12 font-semibold" onClick={handleClose}>exit</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default function DataTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { serverData, getData } = useGetData()
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        setTimeout( () => { location.reload()}, 500)
        handleClose()
    }

  return (
    <div className="bg-white text-black flex flex-col items-center" style={{ width: '80%' }}>
        <div className="flex flex-row justify-center">
        <FormButton selmodel={selectionModel}/>
        <button className="bg-green-500 text-white m-3 p-1 rounded hover:bg-red-700 font-semibold" onClick={handleOpen}>delete server</button>
        <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
            <div className="text-center bg-green-700 text-white h-24 w-80">
                <h1 className="text-xl bg-green-950">Are you sure you want to delete?</h1>
                <div className="flex flex-row justify-center">
                    <button className="bg-red-600 text-white m-3 p-1 rounded hover:bg-red-700 w-12 font-semibold" onClick={deleteData}>yes</button>
                    <button className="bg-gray-200 text-black m-3 p-1 rounded hover:bg-gray-400 w-12 font-semibold" onClick={handleClose}>no</button>
                </div>
            </div>
        </Modal>
        </div>
        <div style={{ width: '80%' }}>
            <DataGrid
                rows={serverData}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                onRowSelectionModelChange={ (item:any) => {
                    setSelectionModel(item)
                }}
            />
        </div>
        
    </div>
  )
}

