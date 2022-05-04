const YouTubeEmbed = (props) => {
    const { url, handle } = props

    return (
        <div className=" bg-white p-2 shadow-lg flex flex-col gap-2 w-full">
            <button
                className="text-blue-600 px-2 py-1 hover:underline ml-auto"
                onClick={handle?.showVideo}
            >
                close video
            </button>
            <iframe
                className="relative h-60 w-full"
                // width="560"
                // height="315"
                src={"https://www.youtube.com/embed/" + url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
    )
}

export default YouTubeEmbed

YouTubeEmbed.defaultProps = {
    url: "https://youtu.be/DdfWxlFoENw?list=PLk56wWUTmS9waXqioOwUOAjq8ly_sogei&t=40",
}
