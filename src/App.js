import { useState, useEffect } from "react"
import Card from "./components/card"
import dribbleDrills from "./library/dribbleDrills"
import shuffleArray from "./utilities/shuffleArray"

function App() {
    let easyDrills = dribbleDrills.filter((drill) => drill.difficulty === "easy")
    let mediumDrills = dribbleDrills.filter((drill) => drill.difficulty === "medium")
    let hardDrills = dribbleDrills.filter((drill) => drill.difficulty === "hard")

    let firstSet = shuffleArray(easyDrills)
    let secondSet = shuffleArray(mediumDrills)
    let thirdSet = shuffleArray(hardDrills)
    let fullSet = firstSet.concat(secondSet, thirdSet)

    // console.log(fullSet)

    const [activeCardIndex, setActiveCardIndex] = useState(0)
    // const [activeCard, setActiveCard]= fullSet[activeCardIndex]

    // useEffect(()=>
    // )

    const [timeLeft, setTimeLeft] = useState(fullSet[activeCardIndex]?.duration)
    const [pause, setPause] = useState()
    const [transition, isTransistion] = useState()

    useEffect(() => {
        if (!pause && timeLeft === 0) {
            setTimeLeft(0)
            isTransistion(true)
        }

        //   if (!pause && timeLeft === 0) {
        //     // isTransistion(true)
        //     // setTimeLeft(3)
        //     setInterval(() => {
        //       !pause && setTimeLeft(timeLeft - 1)
        //       setTimeLeft(activeCard?.duration)
        //     }, 1000)
        // }

        // exit early when we reach 0
        if (!pause && !timeLeft) {
            return
        }

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            !pause && setTimeLeft(timeLeft - 1)
            // isTransistion(false)
        }, 1000)

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId)
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft, pause])

    console.log(activeCardIndex)

    return (
        <div className="bg-slate-700 p-4 h-screen flex">
            <Card
                id={"card_" + activeCardIndex}
                data={fullSet[activeCardIndex]}
                timeLeft={timeLeft}
            />

            {dribbleDrills.map((data, i) => (
               
                    <Card id={"card_" + i} data={data} />
               
            ))}
        </div>
    )
}

export default App
