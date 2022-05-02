import Card from "./components/card"
import dribbleDrills from "./library/dribbleDrills"

function App() {
    return (
        <div className="bg-slate-700 p-4 h-screen flex">
            {dribbleDrills.slice(0,1).map((data, i) => (
                <Card id={"card_" + i} data={data} />
            ))}
        </div>
    )
}

export default App
