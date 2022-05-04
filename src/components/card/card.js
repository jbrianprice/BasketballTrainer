import { useState, useEffect } from "react"
import Rings from "./rings"
import Timer from "./timer"
import logo_shock from "../../img/logo_shock.png"
import YouTubeEmbed from "./youTubeEmbed"
import Container from "./container"

const Card = (props) => {
    const { id, timeLeft } = props
    const { duration, difficulty, name, videoURL, gif } = props?.data

    // const [timeLeft, setTimeLeft] = useState(duration)
    const [video, showVideo] = useState()
    const [pause, setPause] = useState()

    const handle = {
        showVideo: () => {
            setPause(!pause)
            showVideo(!video)
        },
    }

    // useEffect(() => {
    //     if (!pause && timeLeft === 0) {
    //         setTimeLeft(0)
    //     }

    //     // exit early when we reach 0
    //     if (!pause && !timeLeft) return

    //     // save intervalId to clear the interval when the
    //     // component re-renders
    //     const intervalId = setInterval(() => {
    //         !pause && setTimeLeft(timeLeft - 1)
    //     }, 1000)

    //     // clear interval on re-render to avoid memory leaks
    //     return () => clearInterval(intervalId)
    //     // add timeLeft as a dependency to re-rerun the effect
    //     // when we update it
    // }, [timeLeft, pause])

    return (
        <Container id={id} difficulty={difficulty}>
            <Timer timeLeft={timeLeft} />
            <Rings difficulty={difficulty}>
                {video ? (
                    <YouTubeEmbed url={videoURL} handle={handle} />
                ) : (
                    <img src={gif} className="h-80 w-auto" />
                )}
            </Rings>
            <h1 className="font-bold text-3xl w-96">{name}</h1>
            <button
                className="text-blue-600 px-4 py-1 border rounded my-16 h-12 self-center hover:border hover:border-blue-600 "
                onClick={handle.showVideo}
            >
                show me a demo video
            </button>
        </Container>
    )
}

export default Card

Card.defaultProps = {
    data: {
        easy: true,  
        difficulty: "easy",
    },

}

  const Card2 = props => {

    return (
        <div className="">
            <Timer timeLeft={timeLeft} />

            <h1 className="font-bold text-3xl w-96">{name}</h1>
            <button
                className="text-blue-600 px-4 py-1 border rounded my-16 h-12 self-center hover:border hover:border-blue-600 "
                onClick={handle.showVideo}
            >
                show me a demo video
            </button>



        </div>
    )
  }