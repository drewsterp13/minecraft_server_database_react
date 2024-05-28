import DataTable from "../components/DataTable"
import CreeperArt from "../components/CreeperArt"

export default function Dashboard() {
  return (
    <div className="bg-green-600 flex flex-col mb-48 xl:pb-0 items-center">
        <h1 className="font-bold text-3xl text-gray-900 pb-4">Dashboard</h1>
        <DataTable />
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly mt-4" style={{ width: '80%' }}>
          <CreeperArt />
          <CreeperArt />
        </div>
    </div>
  )
}
