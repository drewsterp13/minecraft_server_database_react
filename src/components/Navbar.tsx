import { Link } from "react-router-dom"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, Providers } from "../config/firebase"

export default function Navbar() {
  const signOutOnClick = () => {
    signOut(auth)
    location.reload();
    console.log("RELOADED")
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
      location.reload();
      console.log("RELOADED")
    }
  }

  return (
    <nav className="bg-gray-800 text-white flex flex-row justify-between pb-3">
        <h1 className="font-bold text-3xl text-lime-500">Minecraft Server Inventory</h1>
        <div className="flex flex-row pt-2">
            <Link to="/" className="font-semibold pe-1 hover:text-lime-300">home</Link>
            <Link to="/dashboard" className="font-semibold pe-1 hover:text-lime-300">dashboard</Link>
            <Link to="/" className="font-semibold pe-1 hover:text-lime-300" onClick={ () => { signInOnClick() }}>sign in</Link>
            <Link to="/" className="font-semibold pe-1 hover:text-lime-300" onClick={ () => { signOutOnClick() }}>log out</Link>
        </div>
    </nav>
  )
}
