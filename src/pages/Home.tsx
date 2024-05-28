import CreeperArtLarge from "../components/CreeperArtLarge"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col text-center items-center">
      <h1 className="font-bold text-3xl text-gray-900 pb-4">Homepage</h1>
      <div className="bg-green-800 text-green-50 flex flex-col items-center w-full md:w-2/3 mb-4">
          <p className="text-lg font-mono">Welcome Creepers to the unofficial Minecraft server database where you can get server 
            info such as an ip address, or max player count. To save and load Minecraft server info 
            sign up or log in with Google, and you can get basic Minecraft server info.
          </p>
      </div>
      <div className="bg-white text-black flex flex-col items-center w-full md:w-2/3">
          <h2 className="text-2xl font-bold">Log in and View Dashboard</h2>
          <p>Click here to view Dashboard, there is where you get to see all the server info that you want to see, and when 
            you click on the button, you automatically log in under your Google account if you have one. I really hope that 
            you will enjoy this experience and so does the Creepers as well.
          </p>
          <Link to="/dashboard" className="bg-green-500 text-white m-3 p-4 text-xl rounded hover:bg-green-700 font-semibold">dashboard</Link>
          <h4 className="text-lg font-bold mb-2">SOURCES:</h4>
          <h5 className="text-lg font-semibold">My Database</h5>
          <a className="underline hover:text-lime-700" href="https://minecraft-server-flask.onrender.com">https://minecraft-server-flask.onrender.com</a>
          <h5 className="text-lg font-semibold">Minecraft Server Status API</h5>
          <a className="underline hover:text-lime-700" href="https://api.mcsrvstat.us/">https://api.mcsrvstat.us/</a>
      </div>
      <div className="flex flex-col items-center mb-10"><CreeperArtLarge /></div>
    </div>
  )
}
