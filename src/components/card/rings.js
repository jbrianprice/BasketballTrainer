import "./rings.css"

const Rings = (props) => {
    const { difficulty, children } = props

    return (
        <div className="relative -mt-16 z-0 square ">
            <div className="rounded-full  m-auto square w-11/12 rings-overlay" />
            <div
                className={
                    "rounded-full opacity-30 m-auto square w-11/12 " +
                    (difficulty === "easy" ? "bg-green-600" : "") +
                    (difficulty === "medium" ? "bg-yellow-500" : "") +
                    (difficulty === "hard" ? "bg-red-500" : "")
                }
            />
            <div
                className={
                    "rounded-full opacity-30 m-auto square w-8/12 " +
                    (difficulty === "easy" ? "bg-green-600" : "") +
                    (difficulty === "medium" ? "bg-yellow-500" : "") +
                    (difficulty === "hard" ? "bg-red-500" : "")
                }
            />
            <div
                className={
                    " rounded-full opacity-30 m-auto square w-1/3 " +
                    (difficulty === "easy" ? "bg-green-600" : "") +
                    (difficulty === "medium" ? "bg-yellow-500" : "") +
                    (difficulty === "hard" ? "bg-red-500" : "")
                }
            />
            <div className="w-full square flex items-center justify-center z-10">
                <div className="h-80 w-full flex items-center justify-center flex-none square">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Rings

Rings.defaultProps = {
    easy: true,
}
