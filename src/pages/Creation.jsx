
export default function Creation() {
    return (
        <div>
            <h1 className="flex justify-center">Future Explorations</h1>
            <br/>
            <div className="flex justify-evenly ">
                <div className="border grid justify-items-center">
                    <a href="https://theforest.online" className="grid justify-items-center">
                        <h2 className="text-5xl p-5">🎧</h2>
                        <p>recordings</p>
                    </a>
                </div>
                <div className="border">
                    <a href="https://baked.cloud/zine/bakedchronicles.html" className="grid justify-items-center">
                        <h2 className="text-5xl p-5">🥐</h2>
                        <p>recipe zine</p>
                    </a>
                </div>
                <div>
                    <h2 className="text-5xl p-5">🖥️</h2>
                    <p>polygon art</p>
                </div>
            </div>
        </div>
    )
}