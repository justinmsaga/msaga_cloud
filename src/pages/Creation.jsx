import { useState } from "react"
import Pic from "../components/Pic"

export default function Creation() {
    const [showImg, setShowImg] = useState(false)

    const dispImg = () =>{
        setShowImg(!showImg)
    }


    return (
        <div>
            <h1 className="flex justify-center">Future Explorations</h1>
            <br />
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
                    <button onClick={dispImg}>
                        <h2 className="text-5xl p-5">🖥️</h2>
                        <p>{showImg ? "👇" : "👉"}polygon art{showImg ? "👇" : "👈"}</p>
                    </button>
                </div>
            </div>
            {showImg &&
                <Pic
                    key={1}
                    desc="my first poly art"
                    link="goE9lQYG-HwQPTi0nF8xZCku_TILhg_nwOvU1iROGvQ"
                    w="90%"
                />
            }

        </div>
    )
}