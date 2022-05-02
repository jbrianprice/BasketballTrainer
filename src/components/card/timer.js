const Timer = (props) => {
    const { timeLeft } = props

    return <div className="m-auto mt-4 text-7xl font-bold text-center">{timeLeft}</div>
}

export default Timer

Timer.defaultProps = {
    timeLeft: 15,
}
