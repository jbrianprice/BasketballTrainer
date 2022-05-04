import logo_shock from "../../img/logo_shock.png"
const Container = (props) => {
    const { id, difficulty, children } = props

    return (
        <div className="max-h-screenx flex mx-auto">
            <div
                id={id}
                className="bg-white rounded-3xl shadow p-4 w-1/2x mx-auto my-4 relative text-center flex max-h-fitx"
            >
                <div
                    style={{ borderWidth: "16px" }}
                    className={
                        "border-8 rounded-3xl p-8 flex flex-col relative " +
                        (difficulty === "easy" ? "border-green-600" : "") +
                        (difficulty === "medium" ? "border-yellow-500" : "") +
                        (difficulty === "hard" ? "border-red-500" : "")
                    }
                >
                    {children}
                </div>
                <img src={logo_shock} className="absolute z-10 bottom-2 left-4 w-20" />
            </div>
        </div>
    )
}

export default Container

Container.defaultProps = {
    difficulty: "easy",
}
