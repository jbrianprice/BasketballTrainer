import { useState, useEffect } from "react"
import Rings from "./rings"
import Timer from "./timer"
import logo_shock from "../../img/logo_shock.png"
import YouTubeEmbed from "./youTubeEmbed"

const Card = (props) => {
    const { id } = props
    const { duration, difficulty, name, videoURL } = props?.data

    const [timeLeft, setTimeLeft] = useState(duration)
    const [video, showVideo] = useState()
    const [pause, setPause] = useState()

    const handle = {
        showVideo: ()=> {
            setPause(!pause)
            showVideo(!video)
        }
    }


    useEffect(() => {
        if (!pause && timeLeft === 0) {
            setTimeLeft(0)
        }

        // exit early when we reach 0
        if (!pause && !timeLeft) return

        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            !pause && setTimeLeft(timeLeft - 1)
        }, 1000)

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId)
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft, pause])

    return (
        <div id={id} className="bg-white rounded-3xl shadow p-6 w-1/2x m-auto relative text-center flex">
            <div
                style={{ borderWidth: "16px" }}
                className={
                    "border-8 rounded-3xl p-8 " +
                    (difficulty === "easy" ? "border-green-600" : "") +
                    (difficulty === "medium" ? "border-yellow-500" : "") +
                    (difficulty === "hard" ? "border-red-500" : "")
                }
            >
                <Timer timeLeft={timeLeft} />
                <Rings difficulty={difficulty}>
                    {video ? <YouTubeEmbed url={videoURL} handle={handle} /> : "show demo"}
                </Rings>
                <h1 className="font-bold text-4xl">{name}</h1>
                <button className="text-blue-600 px-2 py-1 my-16 hover:underline" onClick={handle.showVideo}>show me a video</button>
                <img src={logo_shock} className="absolute z-10 bottom-2 left-4 w-20" />
            </div>
        </div>
    )
}

export default Card

Card.defaultProps = {
    data: {
        easy: true,
        difficulty: "easy",
    },
}
