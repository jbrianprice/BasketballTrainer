const Timer = (props) => {
    const { timeLeft } = props

    return (
        <>
            <div className="m-auto mt-4 text-7xl font-extrabold text-center">{timeLeft}</div>
            <div className="m-auto font-bold ">seconds</div>
        </>
    )
}

export default Timer

Timer.defaultProps = {
    timeLeft: 15,
}
