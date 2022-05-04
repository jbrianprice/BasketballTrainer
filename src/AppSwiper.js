import { useState, useEffect, useRef } from "react"
import Card from "./components/card"
import dribbleDrills from "./library/dribbleDrills"
import shuffleArray from "./utilities/shuffleArray"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper"

function App() {
    let easyDrills = dribbleDrills.filter((drill) => drill.difficulty === "easy")
    let mediumDrills = dribbleDrills.filter((drill) => drill.difficulty === "medium")
    let hardDrills = dribbleDrills.filter((drill) => drill.difficulty === "hard")

    let firstSet = shuffleArray(easyDrills)
    let secondSet = shuffleArray(mediumDrills)
    let thirdSet = shuffleArray(hardDrills)
    let fullSet = firstSet.concat(secondSet, thirdSet)

    const [activeCardIndex, setActiveCardIndex] = useState(0)

    // const [timeLeft, setTimeLeft] = useState(fullSet[activeCardIndex]?.duration)
    const [timeLeft, setTimeLeft] = useState(15)
    const [pause, setPause] = useState()
    const [transition, isTransistion] = useState()

    useEffect(() => {
        if (!pause && timeLeft === 0) {
            setTimeLeft(0)
            isTransistion(true)
        }

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

    return (
        <div className="bg-slate-700 p-4x h-screenx flexx  ">
            <Swiper
                onSlideChange={(index) => {
                    console.log("slide changed")
                    console.log(index.snapIndex)
                    console.log(index)
                    console.log(index.isEnd)
                    if (index.isEnd === true) {
                        console.log("end")
                    }
                    setTimeLeft(fullSet[index.snapIndex]?.duration)
                    setActiveCardIndex(index.snapIndex)
                }}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                centeredSlides={true}
                spaceBetween={5}
                loop={false}
                autoplay={{
                    delay: fullSet[activeCardIndex]?.duration * 1000,
                    disableOnInteraction: true,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {dribbleDrills.map((data, i) => (
                    <SwiperSlide>
                        <Card id={"card_" + i} data={data} timeLeft={timeLeft} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* 
            {dribbleDrills.map((data, i) => (
                <Card id={"card_" + i} data={data} />
            ))} */}
        </div>
    )
}

export default App
