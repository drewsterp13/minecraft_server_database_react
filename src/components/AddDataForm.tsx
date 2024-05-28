import React from "react";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseIP, choosePort, chooseHostname, chooseVersion, chooseMOTD, chooseMaxPlayers } from "../redux/slices/RootSlice"

interface AddDataProps {
    id?: string[]
}

const AddDataForm = ( props:AddDataProps ) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const store = useStore();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onPublish = (data: any) => {
        const my_motd = data.motd.clean[0] + " " + data.motd.clean[1]
        const max_players = data.players.max
        dispatch(chooseIP(data.ip))
        dispatch(choosePort(data.port))
        dispatch(chooseVersion(data.version))
        if(!data.hostname) {
            dispatch(chooseHostname("null"))
            console.log("null")
        } else {
            dispatch(chooseHostname(data.hostname))
            console.log(data.hostname)
        }
        dispatch(chooseMOTD(my_motd))
        dispatch(chooseMaxPlayers(max_players))
        
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], store.getState())
        } else {
            server_calls.add(store.getState())
        }

        setTimeout( () => { location.reload()}, 500)
    }

    async function onSubmit(data: any) {
        const result = await server_calls.get_api(data.ip);
        console.log(data.ip)
        onPublish(result)
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
                <input {...register("ip")} className="bg-green-200 border-solid border-1 border-black text-black" type="text" name="ip" placeholder="enter here"/>
                <button className="bg-blue-500 text-white m-3 p-1 rounded hover:bg-blue-700 font-semibold" onClick={handleOpen}>SUBMIT</button>
                <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                    <div className="text-center bg-green-700 text-white h-24 w-80">
                        <h1 className="text-xl bg-green-950">Data has been submitted</h1>
                        <div className="flex flex-row justify-center">
                            <button className="bg-green-300 text-black m-3 p-1 rounded hover:bg-green-500 w-12 font-semibold" onClick={handleClose}>okay</button>
                        </div>
                    </div>
                </Modal>
            </form>
        </div>
    )
}

export default AddDataForm