
export default function Creation() {
    return (
        <div>
            <h1 className="flex justify-center">Prototypes</h1>
            <div className="flex justify-evenly ">
                <div className="border">
                    <a href="https://theforest.online" className="flex flex-col justify-center">
                        <h2 className="text-5xl p-5">🎧</h2>
                        <p>recordings</p>
                    </a>
                </div>
                <div className="border">
                    <a href="https://baked.cloud/zine/bakedchronicles.html" className="flex flex-col justify-center">
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