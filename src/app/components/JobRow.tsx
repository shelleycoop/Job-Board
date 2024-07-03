export default function JobRow() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-sm flex gap-4">
                <div>
                    <img 
                    className="size-12"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="" />
                </div>
                <div>
                    <div>Spotify</div>
                    <div>Product Designer</div>
                    <div>Remote &middot; New York, US &middot; Full-Time</div>
                </div>
                <div className="content-end">2 weeks ago</div>
            </div>
        </>
    )
}